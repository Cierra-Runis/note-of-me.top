import NextLink from 'next/link';
export default function Page() {
  return (
    <section className={`
      flex h-full flex-col items-center justify-center gap-4 py-8
      md:py-10
    `}>
      <div className='flex gap-4'>
        <NextLink href='/app/midi' prefetch>
          MIDI 播放器
        </NextLink>
      </div>
    </section>
  );
}
