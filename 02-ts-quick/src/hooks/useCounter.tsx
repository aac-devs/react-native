import { useState } from 'react';

export const useCounter = (initial: number = 0) => {
  const [value, setValue] = useState<number>(initial);

  const accumulate = (val: number) => {
    setValue(value + val);
  };

  return { value, accumulate };
};
