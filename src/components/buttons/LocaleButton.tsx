'use client';

import { routing, usePathname, useRouter } from '@/i18n/routing';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/dropdown';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function LocaleButton() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      aria-label={t('languages')}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <DropdownTrigger>
        <Button
          isIconOnly
          size='sm'
          startContent={<LanguageIcon className='w-5' />}
          variant='light'
        />
      </DropdownTrigger>
      <DropdownMenu
        onAction={(key) => {
          setIsOpen(false);
          return router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { params, pathname },
            { locale: key as string },
          );
        }}
        selectedKeys={[locale]}
        selectionMode='single'
      >
        {routing.locales.map((key) => (
          <DropdownItem key={key} title={t(`locales.${key}`)} />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
