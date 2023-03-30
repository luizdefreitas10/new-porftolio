import { useEffect, ReactNode } from 'react';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
  children: ReactNode;
}

const AOSWrapper = ({ children }: AOSWrapperProps) => {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init();
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
