interface Person {
  name: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNumber: number;
}

export const LiteralObjects = () => {
  const person: Person = {
    name: 'Andres',
    age: 41,
    address: {
      country: 'Argentina',
      houseNumber: 1800,
    },
  };

  return (
    <div>
      <h3>Literal Objects</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </div>
  );
};
