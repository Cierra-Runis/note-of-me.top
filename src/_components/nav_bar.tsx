import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import NextLink from 'next/link';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/_components/theme-switch';
import LocaleSwitcher from './language-switch';
import { useTranslations } from 'next-intl';
import { Avatar } from '@nextui-org/react';
import { SiGithub } from '@icons-pack/react-simple-icons';

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
      // startContent={
      // <MagnifyingGlassIcon
      //   className='text-base text-default-400 pointer-events-none flex-shrink-0 '
      //   width={22}
      // />
      // }
      type='search'
    />
  );

  return (
    <NextUINavbar maxWidth='xl' position='sticky'>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1' href='/'>
            <Avatar
              src={siteConfig.links.githubAvatar}
              name={siteConfig.author.name}
            />
            <p className='font-bold text-inherit'>{t('site.name')}</p>
          </NextLink>
        </NavbarBrand>
        <ul className='hidden lg:flex gap-4 justify-start ml-2'>
          {/* {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))} */}
        </ul>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex gap-2'>
          <Link isExternal aria-label='Github' href={siteConfig.author.url}>
            <SiGithub className='text-default-500' size={24} />
          </Link>
          <LocaleSwitcher />
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <Link isExternal aria-label='Github' href={siteConfig.author.url}>
          <SiGithub className='text-default-500' />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
