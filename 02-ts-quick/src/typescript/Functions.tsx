export const Functions = () => {
  const add = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <div>
      <h3>Functions</h3>
      <span>El resultado es: {add(15, 7)}</span>
    </div>
  );
};
