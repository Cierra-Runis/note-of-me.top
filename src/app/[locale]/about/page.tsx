import { technicalStack } from '@/config';
import { Button } from '@nextui-org/button';
import { useTranslations } from 'next-intl';
import NextLink from 'next/link';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <div className='relative isolate overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-5xl font-semibold tracking-tight sm:text-7xl'>
            {t('about.title')}
          </h2>
          <p className='mt-8 text-pretty text-lg font-medium sm:text-xl/8'>
            {t('about.description')}
          </p>
        </div>
      </div>
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <h2 className='text-center text-lg/8 font-semibold'>
            {t('whatAreWeUsingNow')}
          </h2>
          <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
            {technicalStack.map(({ icon, name, url }, index) => (
              <Button
                as={NextLink}
                className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                href={url}
                key={index}
                prefetch
                startContent={icon}
                variant='light'
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
