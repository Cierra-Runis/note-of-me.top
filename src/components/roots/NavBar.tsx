'use client';

import { siteConfig } from '@/config';
import { Link as NextLink } from '@/i18n/routing';
import { Avatar } from '@nextui-org/avatar';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import LocaleButton from '../buttons/LocaleButton';
import SearchButton from '../buttons/SearchButton';
import ThemeButton from '../buttons/ThemeButton';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations();

  return (
    <NextUINavbar
      isBordered
      isMenuOpen={isMenuOpen}
      maxWidth='xl'
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarBrand className='max-w-fit gap-3'>
        <NextLink
          className='flex items-center justify-start gap-1'
          href='/'
          prefetch
        >
          <Avatar size='sm' src={siteConfig.links.githubAvatar} />
        </NextLink>
        <ul className='ml-2 flex justify-start gap-6'>
          <NavbarItem key='/post'>
            <NextLink href='/post' prefetch>
              {t('post')}
            </NextLink>
          </NavbarItem>
          <NavbarItem key='/about'>
            <NextLink href='/about' prefetch>
              {t('about.title')}
            </NextLink>
          </NavbarItem>
          <NavbarItem key='/friend'>
            <NextLink href='/friend' prefetch>
              {t('friend')}
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarBrand>
      <NavbarContent className='basis-full' justify='end'>
        <NavbarItem className='flex gap-2'>
          <SearchButton />
          <LocaleButton />
          <ThemeButton />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
