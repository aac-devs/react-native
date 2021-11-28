import { useState } from 'react';

export const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const accumulate = (val: number) => {
    setValue(value + val);
  };

  return (
    <div>
      <h3>
        Counter <small>{value}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => accumulate(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => accumulate(-1)}>
        -1
      </button>
    </div>
  );
};
