import { useState, useEffect } from 'react';

const IS_MOBILE = () : boolean =>
  typeof window !== 'undefined' ? window.innerWidth <= 768 - 0.02 : false;
const IS_TABLET = () : boolean =>
  typeof window !== 'undefined' ? window.innerWidth <= 1171 - 0.02 : false;
const IS_DESCTOP = () : boolean =>
  typeof window !== 'undefined' ? window.innerWidth >= 1171 : false;

const useResizeScreen = () => {
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesctop, setDesctop] = useState(false);

  const handleResize = () => {
    setMobile(IS_MOBILE());
    setTablet(IS_TABLET());
    setDesctop(IS_DESCTOP);
  };

  useEffect(() => {
    setMobile(IS_MOBILE());
    setTablet(IS_TABLET());
    setDesctop(IS_DESCTOP());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return { isMobile, isTablet, isDesctop };
};

export default useResizeScreen;