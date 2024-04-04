import { useState, useEffect } from "react";

const useOnScreen = (
  ref: React.MutableRefObject<HTMLElement | null>,
  rootMargin = "0px"
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    const currentElement = ref?.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, rootMargin]);

  return isVisible;
};

export default useOnScreen;
