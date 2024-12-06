'use client';

import { redirect, routing, usePathname } from '@/i18n/routing';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';

import { useLocale, useTranslations } from 'next-intl';

export default function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          size='sm'
          variant='light'
          startContent={<LanguageIcon className='w-5 text-default-500' />}
          isIconOnly
        />
      </DropdownTrigger>
      <DropdownMenu
        selectedKeys={[locale]}
        selectionMode='single'
        onAction={(key) =>
          redirect({ locale: key as string, href: { pathname: pathname } })
        }
      >
        {routing.locales.map((key) => (
          <DropdownItem
            key={key}
            title={t(`locales.${key}`)}
          />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
