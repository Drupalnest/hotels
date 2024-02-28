import { useState, useEffect } from 'react';

export default function useMobileDetect() {
  const [isMobileOnly, setIsMobileOnly] = useState(window.innerWidth < 992);

  useEffect(() => {
    function handleResize() {
      setIsMobileOnly(window.innerWidth < 992);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileOnly;
}
