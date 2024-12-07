import { Link } from '@/i18n/routing';
import { promises as fs } from 'fs';
import { getTranslations } from 'next-intl/server';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

export default async function Projects() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'src/post'));
  const t = await getTranslations();

  interface Frontmatter {
    title: string;
  }

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), 'src/post', filename),
        'utf-8',
      );
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });
      return {
        filename,
        slug: filename.replace('.mdx', ''),
        ...frontmatter,
      };
    }),
  );

  return (
    <section>
      <h1>{t('post')}</h1>

      <div>
        <h2 className='sr-only'>Project Ideas</h2>
        <ul>
          {projects.map(({ title, slug }) => {
            return (
              <li key={slug}>
                <Link href={`/post/${slug}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
