'use client';

import LocaleButton from '../buttons/LocaleButton';
import SearchButton from '../buttons/SearchButton';
import ThemeButton from '../buttons/ThemeButton';
import { Avatar } from '@nextui-org/avatar';
import { Link } from '@nextui-org/link';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import { useTranslations } from 'next-intl';
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
        <Link className='flex items-center justify-start gap-1' href='/'>
          <Avatar
            src='https://avatars.githubusercontent.com/u/29329988'
            size='sm'
          />
        </Link>
        <ul className='ml-2 flex justify-start gap-6'>
          <NavbarItem key='/post'>
            <Link href='/post'>{t('post')}</Link>
          </NavbarItem>
          <NavbarItem key='/about'>
            <Link href='/about'>{t('about.title')}</Link>
          </NavbarItem>
          <NavbarItem key='/friend'>
            <Link href='/friend'>{t('friend')}</Link>
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
