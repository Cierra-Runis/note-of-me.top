'use client';

import { redirect, routing, usePathname } from '@/i18n/routing';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { Button, Listbox, ListboxItem, Tooltip } from '@nextui-org/react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

export default function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      content={
        <Listbox
          aria-label='Actions'
          selectionMode='single'
          selectedKeys={[locale]}
        >
          {routing.locales.map((key) => (
            <ListboxItem
              key={key}
              onClick={() => {
                setIsOpen(false);
                redirect({ locale: key, href: { pathname: pathname } });
              }}
            >
              {t(`locales.${key}`)}
            </ListboxItem>
          ))}
        </Listbox>
      }
    >
      <Button
        size='sm'
        variant='light'
        startContent={<LanguageIcon className='text-default-500 w-5' />}
        isIconOnly
        onClick={() => setIsOpen(true)}
      />
    </Tooltip>
  );
}
