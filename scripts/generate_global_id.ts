// generate-global-id.ts
import fs from 'fs/promises';
import { globby } from 'globby';
import matter from 'gray-matter';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 12);

async function main() {
  const files = await globby(['**/*.mdx'], { gitignore: true });

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8');
    const parsed = matter(raw);

    const id = parsed.data.id as string | undefined | null;

    if (!id) {
      parsed.data.id = nanoid();
      const updated = matter.stringify(parsed.content, parsed.data);
      await fs.writeFile(file, updated);
      console.log(`✅ Added id to ${file}`);
    } else {
      console.log(`🟡 Skipped (already has id): ${file}`);
    }
  }
}

main();
