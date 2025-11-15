import Link from 'next/link';

import ThemeButton from '@/components/buttons/ThemeButton';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config';

const routes = [
  { href: '/post', title: '文章' },
  { href: '/app', title: '应用' },
  { href: '/about', title: '关于' },
  { href: '/friend', title: '友链' },
];

export default function Navbar() {
  return (
    <header className={`sticky top-0 z-10 w-full border-b backdrop-blur-2xl`}>
      <div className={`mx-auto flex h-16 w-full items-center gap-3 px-4`}>
        <Link className='flex items-center gap-2' href='/'>
          <Avatar className='h-8 w-8'>
            <AvatarImage alt='Logo' src={siteConfig.links.githubAvatar} />
          </Avatar>
        </Link>

        <nav className={`ml-6 flex items-center gap-4`}>
          {routes.map((r) => (
            <Link
              className={`
                text-sm text-muted-foreground transition-colors
                hover:text-foreground
              `}
              href={r.href}
              key={r.href}
            >
              {r.title}
            </Link>
          ))}
        </nav>

        <div className='ml-auto flex items-center gap-1'>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
