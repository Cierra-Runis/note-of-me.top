import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@/i18n/routing';

import { ThemeSwitch } from '@/components/theme-switch';
import LocaleSwitch from './locale-switch';
import { useTranslations } from 'next-intl';
import GitHubButton from './github-button';
import SearchButton from './search-button';

export const Navbar = () => {
  const t = useTranslations();

  return (
    <NextUINavbar maxWidth='xl' shouldHideOnScroll>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand className='gap-3 max-w-fit'>
          <Link className='flex justify-start items-center gap-1' href='/'>
            {/* <Avatar
              src={siteConfig.links.githubAvatar}
              name={siteConfig.author.name}
            /> */}
            <p className='font-bold text-inherit'>{t('site.name')}</p>
          </Link>
        </NavbarBrand>
        <ul className='hidden sm:flex gap-4 justify-start ml-2'>
          <NavbarItem key='/'>
            <Link href='/'>{t('home')}</Link>
          </NavbarItem>
          <NavbarItem key='/post'>
            <Link href='/post'>{t('post')}</Link>
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
          <LocaleSwitch />
          <GitHubButton />
          <ThemeSwitch />
          <SearchButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <GitHubButton />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem key='/'>
          <Link href='/'>{t('home')}</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key='/post'>
          <Link href='/post'>{t('post')}</Link>
        </NavbarMenuItem>
        <NavbarMenuItem key='/about'>
          <Link href='/about'>{t('about')}</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
