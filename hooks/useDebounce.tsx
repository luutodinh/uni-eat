import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number = 700) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(idTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounce;
};

export default useDebounce;
