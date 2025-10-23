import Slugger from 'github-slugger';
import { marked } from 'marked';

export type Heading = { id: string; level: number; text: string };

const slugger = new Slugger();
export function getHeadings(markdownText: string | undefined): Heading[] {
  const headings: Heading[] = [];

  if (!markdownText) return headings;

  slugger.reset();
  const tokens = marked.lexer(markdownText);

  /// FIXME: slugger sometimes doesn't match the headings
  tokens.forEach((token) => {
    if (token.type !== 'heading') return;
    headings.push({
      id: slugger.slug(token.text),
      level: token.depth,
      text: token.text,
    });
  });

  return headings;
}
