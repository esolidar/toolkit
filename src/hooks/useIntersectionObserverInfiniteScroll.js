import { useEffect, useState, useRef } from 'react';

const useIntersectionObserverInfiniteScroll = ({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '50px',
  enabled = true,
  loadInterval = 3,
  page = 1,
  status,
}) => {
  const [showLoadButton, setShowLoadButton] = useState(status !== 'loading');
  const lastPageWithLoadButton = useRef(1);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const nextPageWithLoadButton = lastPageWithLoadButton.current + loadInterval;
    const showButtonInCurrentPage = page === 1 || page === nextPageWithLoadButton;

    if (showButtonInCurrentPage) {
      if (page !== 1) lastPageWithLoadButton.current = page;
      if (!showLoadButton && status === 'success') setShowLoadButton(true);
      return;
    }

    if (showLoadButton) setShowLoadButton(false);

    const element = target && target.current;
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [enabled, page, status]);

  return [showLoadButton];
};

export default useIntersectionObserverInfiniteScroll;
