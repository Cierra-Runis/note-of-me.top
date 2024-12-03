import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { Kbd } from '@nextui-org/kbd';
import { Input } from '@nextui-org/input';
import { Link } from '@/i18n/routing';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import LocaleSwitcher from './language-switch';
import { useTranslations } from 'next-intl';
import { Avatar } from '@nextui-org/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import GitHubButton from './github-button';

export const Navbar = () => {
  const t = useTranslations();

  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className='hidden lg:inline-block' keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <MagnifyingGlassIcon className='text-base text-default-400 pointer-events-none flex-shrink-0 w-6' />
      }
      type='search'
    />
  );

  return (
    <NextUINavbar maxWidth='xl' position='sticky'>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand className='gap-3 max-w-fit'>
          <Link className='flex justify-start items-center gap-1' href='/'>
            <Avatar
              src={siteConfig.links.githubAvatar}
              name={siteConfig.author.name}
            />
            <p className='font-bold text-inherit'>{t('site.name')}</p>
          </Link>
        </NavbarBrand>
        <ul className='hidden lg:flex gap-4 justify-start ml-2'>
          <NavbarItem key='/'>
            <Link href='/'>{t('home')}</Link>
          </NavbarItem>
          <NavbarItem key='/blog'>
            <Link href='/blog'>{t('blog')}</Link>
          </NavbarItem>
          <NavbarItem key='/about'>
            <Link href='/about'>{t('about')}</Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex gap-2'>
          <LocaleSwitcher />
          <GitHubButton />
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <GitHubButton />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
