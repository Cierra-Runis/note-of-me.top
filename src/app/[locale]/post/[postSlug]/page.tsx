import { Code } from '@nextui-org/code';
import { Kbd } from '@nextui-org/kbd';
import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

export default async function Post(props: {
  params: Promise<{ postSlug: string }>;
}) {
  const params = await props.params;
  const content = await fs.readFile(
    path.join(process.cwd(), 'src/post', `${params.postSlug}.mdx`),
    'utf-8',
  );

  const data = await compileMDX<{ title: string }>({
    source: content,
    options: { parseFrontmatter: true },
    components: {
      code: (codeProps) => <Code color='secondary'>{codeProps.children}</Code>,
      kbd: (kbdProps) => <Kbd>{kbdProps.children}</Kbd>,
    },
  });

  return (
    <section>
      <h1>{data.frontmatter.title}</h1>
      {data.content}
    </section>
  );
}
