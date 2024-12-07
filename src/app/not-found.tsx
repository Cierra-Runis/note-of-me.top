'use client';

export default function NotFound() {
  // const t = useTranslations();

  return (
    <section className='grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-secondary'>404</p>
        {/* <h1 className='mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl'>
          {t('errors.pageNotFound.title')}
        </h1>
        <p className='mt-6 text-pretty text-lg font-medium text-secondary-600 sm:text-xl/8'>
          {t('errors.pageNotFound.description')}
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button href='/' as={Link} color='secondary'>
            {t('common.backToHome')}
          </Button>
        </div> */}
      </div>
    </section>
  );
}
