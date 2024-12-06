import { Code } from '@nextui-org/code';
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
      code: (props) => <Code color='secondary'>{props.children}</Code>,
    },
  });

  return (
    <section>
      <h1>{data.frontmatter.title}</h1>
      {data.content}
    </section>
  );
}
