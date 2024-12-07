import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('errors.pageNotFound');

  return (
    <section>
      <h1>{t('title')}</h1>
      <p className='max-w-[460px]'>{t('description')}</p>
    </section>
  );
}
