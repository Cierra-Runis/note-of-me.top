import GitHubButton from '../buttons/github-button';
import SearchButton from '../buttons/search-button';
import LocaleSwitch from '../locale-switch';
import { ThemeButton } from '@/components/buttons/theme-button';
import { Link as I18nLink } from '@/i18n/routing';
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

export const Navbar = () => {
  const t = useTranslations();

  return (
    <NextUINavbar maxWidth='xl' shouldHideOnScroll isBordered>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand className='max-w-fit gap-3'>
          <I18nLink className='flex items-center justify-start gap-1' href='/'>
            <p className='font-bold text-inherit'>{t('site.name')}</p>
          </I18nLink>
        </NavbarBrand>
        <ul className='ml-2 hidden justify-start gap-6 sm:flex'>
          <NavbarItem key='/'>
            <Link href='/'>{t('home')}</Link>
          </NavbarItem>
          <NavbarItem key='/post'>
            <Link href='/post'>{t('post')}</Link>
          </NavbarItem>
          <NavbarItem key='/about'>
            <Link href='/about'>{t('about.name')}</Link>
          </NavbarItem>
        </ul>
      </NavbarContent>

      <NavbarContent
        className='hidden basis-1/5 sm:flex sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden gap-2 sm:flex'>
          <LocaleSwitch />
          <GitHubButton />
          <ThemeButton />
          <SearchButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='basis-1 pl-4 sm:hidden' justify='end'>
        <LocaleSwitch />
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
            {t('about.name')}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
