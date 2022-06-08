import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [isBottom, setIsBottom] = useState(false);

  const onscroll = () => {
    const scroll = document.body.offsetHeight - window.innerHeight - 50;

    if (window.scrollY >= scroll) {
      setIsBottom(true);
      return;
    }
    setIsBottom(false);
  };

  const onresize = () => {
    if (window.scrollY === 0) {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onscroll);
    window.addEventListener('resize', onresize);
    return () => {
      window.removeEventListener('scroll', onscroll);
      window.addEventListener('resize', onresize);
    };
  }, []);

  return { isBottom };
};
