import { useEffect, useRef, useState } from 'react';

export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = useState<null | string>();
  const observer = useRef<IntersectionObserver>(null);

  useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    );

    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute('id'));
        }
      });
    }, options);
    elements.forEach((el) => el && observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
}
