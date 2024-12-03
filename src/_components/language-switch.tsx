'use client';

import { routing } from '@/i18n/routing';
import { Button, Listbox, ListboxItem, Tooltip } from '@nextui-org/react';
import { useLocale, useTranslations } from 'next-intl';

export default function LocaleSwitcher() {
  const locale = useLocale();

  const t = useTranslations();
  return (
    <Tooltip
      content={
        <Listbox
          aria-label='Actions'
          selectionMode='single'
          selectedKeys={[locale]}
        >
          {routing.locales.map((locale) => (
            <ListboxItem key={locale} onClick={() => {}}>
              {t(`locales.${locale}`)}
            </ListboxItem>
          ))}
        </Listbox>
      }
    >
      <Button size='sm' variant='light'>
        {t('languages')}
      </Button>
    </Tooltip>
  );
}
