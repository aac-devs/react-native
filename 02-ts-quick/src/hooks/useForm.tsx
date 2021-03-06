import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [state, setState] = useState(initialState);

  const stateOnChange = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    state,
    stateOnChange,
  };
};
