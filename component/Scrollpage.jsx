'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const pages = ['/', '/aboutpage', '/mywork', '/contactpage'];

export default function ScrollNavigator({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.deltaX || event.deltaY;
      const currentPath = window.location.pathname;
      const currentIndex = pages.indexOf(currentPath);

      if (delta > 0 && currentIndex < pages.length - 1) {
        router.push(pages[currentIndex + 1]);
      } else if (delta < 0 && currentIndex > 0) {
        router.push(pages[currentIndex - 1]);
      }
    };

    const handleKeydown = (event) => {
      const currentPath = window.location.pathname;
      const currentIndex = pages.indexOf(currentPath);

      if (event.key === 'ArrowRight' && currentIndex < pages.length - 1) {
        router.push(pages[currentIndex + 1]);
      } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
        router.push(pages[currentIndex - 1]);
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [router]);

  return <div>{children}</div>;
}
