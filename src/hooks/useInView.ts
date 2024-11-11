import React, { useEffect, useState } from 'react';

const useInView = (ref: React.RefObject<HTMLElement>) => {

  const [inView, setIsInView] = useState(false);

  useEffect(() => {
    const currentSectionRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [ref]);

  return inView;
};

export default useInView;