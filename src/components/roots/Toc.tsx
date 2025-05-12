'use client';

import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { Heading } from '@/utils/heading';
import { ScrollShadow } from '@heroui/scroll-shadow';
import clsx from 'clsx';
import { FC, useEffect, useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

const paddingLeftByLevel: Record<number, string> = {
  1: 'pl-0',
  2: 'pl-0',
  3: 'pl-3',
  4: 'pl-6',
};
export const DocsToc: FC<{
  headings: Heading[];
}> = ({ headings }) => {
  const tocRef = useRef<HTMLDivElement>(null);

  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: '0% 0% -80% 0%',
    },
  );

  const activeIndex = headings.findIndex(({ id }) => id == activeId);

  useEffect(() => {
    if (!activeId || activeIndex < 2) return;
    const anchor = tocRef.current?.querySelector(`li > a[href="#${activeId}"]`);

    if (anchor) {
      scrollIntoView(anchor, {
        behavior: 'smooth',
        block: 'center',
        boundary: tocRef.current,
        inline: 'center',
        scrollMode: 'always',
      });
    }
  }, [activeId, activeIndex]);

  return (
    <ScrollShadow
      className='fixed flex h-3/4 flex-col gap-4 overflow-y-scroll overscroll-contain text-left'
      hideScrollBar
      ref={tocRef}
    >
      <h2 className='text-lg font-medium'>您将看到</h2>
      <ul className='flex flex-col gap-2 scrollbar-hide'>
        {headings.map(
          (heading, i) =>
            heading.level > 1 && (
              <li
                className={clsx(
                  'transition-colors',
                  'flex items-center text-tiny font-normal text-default-500 dark:text-default-300',
                  'data-[active=true]:text-foreground',
                  'dark:data-[active=true]:text-foreground',
                  "before:content-['']",
                  'before:opacity-0',
                  'data-[active=true]:before:opacity-100',
                  'before:transition-opacity',
                  'before:-ml-3',
                  'before:absolute',
                  'before:bg-default-400',
                  'before:w-1',
                  'before:h-1',
                  'before:rounded-full',
                  paddingLeftByLevel[heading.level],
                )}
                data-active={activeId == heading.id}
                key={i}
              >
                {/*
                  It's unnecessary to use `NextLink` from `next/link` package,
                  which leads to unnecessary request to server.
                */}
                <a href={`#${heading.id}`}>{heading.text}</a>
              </li>
            ),
        )}
      </ul>
    </ScrollShadow>
  );
};
