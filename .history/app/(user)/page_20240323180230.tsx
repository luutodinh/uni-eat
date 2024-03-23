import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Navigation = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/user');
  }, []);

  return <></>;
};

export default Navigation;
