import { useEffect } from 'react';

export const useScrollToTop = (listen: any) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [listen]);

  return null;
};
