import { useEffect, useState } from 'react';

const useIntersectionObserver = (reference) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries, observer) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
        observer.disconnect();
      }
    }
  }, [reference]);

  return isVisible;
};