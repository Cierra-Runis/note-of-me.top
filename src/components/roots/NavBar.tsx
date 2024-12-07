import GitHubButton from '../buttons/GitHubButton';
import LocaleButton from '../buttons/LocaleButton';
import SearchButton from '../buttons/SearchButton';
import ThemeButton from '../buttons/ThemeButton';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from '@nextui-org/link';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { useTranslations } from 'next-intl';

export const NavBar = () => {
  const t = useTranslations();

  return (
    <NextUINavbar maxWidth='xl' shouldHideOnScroll isBordered>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand className='max-w-fit gap-3'>
          <Link className='flex items-center justify-start gap-1' href='/'>
            <p className='font-bold text-inherit'>{t('site.title')}</p>
          </Link>
        </NavbarBrand>
        <ul className='ml-2 hidden justify-start gap-6 sm:flex'>
          <NavbarItem key='/'>
            <Link href='/'>{t('home')}</Link>
          </NavbarItem>
          <NavbarItem key='/post'>
            <Link href='/post'>{t('post')}</Link>
          </NavbarItem>
          <NavbarItem key='/about'>
            <Link href='/about'>{t('about.title')}</Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent
        className='hidden basis-1/5 sm:flex sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden gap-2 sm:flex'>
          <LocaleButton />
          <GitHubButton />
          <ThemeButton />
          <SearchButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='basis-1 pl-4 sm:hidden' justify='end'>
        <LocaleButton />
        <GitHubButton />
        <ThemeButton />
        <SearchButton />
        <NavbarMenuToggle
          icon={<Bars3Icon className='w-5 text-default-500' />}
        />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem key='/'>
          <Link href='/' className='w-full'>
            {t('home')}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key='/post'>
          <Link href='/post' className='w-full'>
            {t('post')}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key='/about'>
          <Link href='/about' className='w-full'>
            {t('about.title')}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
