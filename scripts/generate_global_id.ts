import fs from 'fs/promises';
import { globby } from 'globby';
import matter from 'gray-matter';
import { customAlphabet } from 'nanoid';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/// $\sqrt{ -2 \cdot 26^6 \ln{1 - 0.01} } + 1/2 = 2492$
/// $\sqrt{ -2 \cdot 26^6 \ln{1 - 0.001} } + 1/2 = 787$
const nanoid = customAlphabet(alphabet, 6);

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
      console.log(`🟡 Skipped ${id}: ${file}`);
    }
  }
}

main();
