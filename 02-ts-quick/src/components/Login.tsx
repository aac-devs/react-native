import { useEffect, useReducer } from 'react';

interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState = {
  validating: true,
  token: null,
  username: '',
  name: '',
};

type LoginPayload = {
  name: string;
  username: string;
};

type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validating: false,
        token: null,
        username: '',
        name: '',
      };
    case 'login':
      const { username, name } = action.payload;
      return {
        validating: false,
        token: '123',
        username,
        name,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validating, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const loginHandler = () => {
    dispatch({
      type: 'login',
      payload: { name: 'Andres', username: 'aac-devs' },
    });
  };

  const logoutHandler = () => {
    dispatch({ type: 'logout' });
  };

  if (validating) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validating...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Authenticated as {name}</div>
      ) : (
        <div className="alert alert-danger">No Authenticated</div>
      )}
      {token ? (
        <button className="btn btn-danger" onClick={logoutHandler}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={loginHandler}>
          Login
        </button>
      )}
    </>
  );
};
