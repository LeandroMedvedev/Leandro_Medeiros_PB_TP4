import { useEffect, useState } from 'react';

function useScrollEffect() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 40 ? setScrolling(true) : setScrolling(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolling;
}

export default useScrollEffect;
