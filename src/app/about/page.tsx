import TechnicalButton from '@/components/buttons/TechnicalButton';
import { siteConfig, technicalStack } from '@/config';

export default function AboutPage() {
  return (
    <section className='relative isolate overflow-hidden'>
      <div className={`
        mx-auto max-w-7xl px-6
        lg:px-8
      `}>
        <div className={`
          mx-auto max-w-2xl
          lg:mx-0
        `}>
          <h2 className={`
            text-5xl font-semibold tracking-tight
            sm:text-7xl
          `}>
            关于
          </h2>
          <p className={`
            mt-8 text-lg font-medium text-pretty
            sm:text-xl/8
          `}>
            {siteConfig.description}
          </p>
        </div>
      </div>
      <div className={`
        py-24
        sm:py-32
      `}>
        <div className={`
          mx-auto max-w-7xl px-6
          lg:px-8
        `}>
          <h2 className='text-center text-lg/8 font-semibold'>技术栈</h2>
          <div className={`
            mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8
            gap-y-10
            sm:max-w-xl sm:grid-cols-6 sm:gap-x-10
            lg:mx-0 lg:max-w-none lg:grid-cols-5
          `}>
            {technicalStack.map((technical, index) => (
              <TechnicalButton key={index} technical={technical} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
