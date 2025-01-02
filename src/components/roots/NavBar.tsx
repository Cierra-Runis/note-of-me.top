'use client';

import LocaleButton from '../buttons/LocaleButton';
import SearchButton from '../buttons/SearchButton';
import ThemeButton from '../buttons/ThemeButton';
import { Avatar } from '@nextui-org/avatar';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';
import { useState } from 'react';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations();

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth='xl'
      shouldHideOnScroll
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className='max-w-fit gap-3'>
        <NextLink
          prefetch
          className='flex items-center justify-start gap-1'
          href='/'
        >
          <Avatar
            src='https://avatars.githubusercontent.com/u/29329988'
            size='sm'
          />
        </NextLink>
        <ul className='ml-2 flex justify-start gap-6'>
          <NavbarItem key='/post'>
            <NextLink prefetch href='/post'>
              {t('post')}
            </NextLink>
          </NavbarItem>
          <NavbarItem key='/about'>
            <NextLink prefetch href='/about'>
              {t('about.title')}
            </NextLink>
          </NavbarItem>
          <NavbarItem key='/friend'>
            <NextLink prefetch href='/friend'>
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
