import { useEffect, useRef, useState } from 'react';

interface Props {
  rootMargin?: string;
  threshold?: number;
}

export function useReveal<T extends HTMLElement>({
  rootMargin = '0px 0px -15% 0px',
  threshold = 0,
}: Props = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, isVisible };
}
