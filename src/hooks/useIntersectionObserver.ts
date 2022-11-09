import { useRef, useEffect, useCallback } from 'react';

const useIntersectionObserver = (fetchApi: () => void, isCheckPage: boolean, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);

  const target = ref.current;

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isCheckPage) {
          fetchApi();
        }
      });
    },
    [fetchApi, isCheckPage]
  );

  useEffect(() => {
    if (!target) return undefined;

    const observer = new IntersectionObserver(callback, options);

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [target, callback, options]);

  return ref;
};

export default useIntersectionObserver;
