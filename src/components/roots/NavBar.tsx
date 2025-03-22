'use client';

import { siteConfig } from '@/config';
import { Avatar } from '@heroui/avatar';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import NextLink from 'next/link';
import { useState } from 'react';

import SearchButton from '../buttons/SearchButton';
import ThemeButton from '../buttons/ThemeButton';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
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
              文章
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink href='/app' prefetch>
              应用
            </NextLink>
          </NavbarItem>
          <NavbarItem key='/about'>
            <NextLink href='/about' prefetch>
              关于
            </NextLink>
          </NavbarItem>
          <NavbarItem key='/friend'>
            <NextLink href='/friend' prefetch>
              友链
            </NextLink>
          </NavbarItem>
        </ul>
      </NavbarBrand>
      <NavbarContent className='basis-full' justify='end'>
        <NavbarItem className='flex gap-2'>
          <SearchButton />
          <ThemeButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
