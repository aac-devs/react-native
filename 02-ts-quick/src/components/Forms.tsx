import { useForm } from '../hooks/useForm';

export const Forms = () => {
  const { email, password, state, stateOnChange } = useForm({
    email: 'aac@mail.com',
    password: '123456',
  });

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target: { value } }) => stateOnChange(value, 'email')}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target: { value } }) => stateOnChange(value, 'password')}
      />
      <code>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </code>
    </>
  );
};
