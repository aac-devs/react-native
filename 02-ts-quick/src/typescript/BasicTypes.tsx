export const BasicTypes = () => {
  const name: string = 'aac-devs';
  const age: number = 41;
  const isActive: boolean = true;

  const powers: (string | number)[] = ['Speed', 'Fly', 41];

  return (
    <div>
      <h3>Basic Types</h3>
      {name}, {age}, {isActive ? 'Active' : 'Inactive'}
      <br />
      {powers.join(', ')}
    </div>
  );
};
