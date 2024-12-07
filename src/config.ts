import { Kode_Mono as FontMono, Saira as FontSans } from 'next/font/google';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : `http://localhost:${port}`;

export const siteConfig = {
  author: {
    name: 'Cierra Runis',
    url: 'https://github.com/Cierra-Runis',
  },
  links: {
    githubAvatar: 'https://avatars.githubusercontent.com/u/29329988',
    docs: 'https://nextui.org',
  },
};

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});
