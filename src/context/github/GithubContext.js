import {createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GIHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (testing purposes)
  

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GIHUB_URL}/users`, {
      headers: {
        // Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    dispatch({type: 'GET_USERS', payload: data});
  };
  // Set Loading
  const setLoading = () => {
    dispatch({type: 'SET_LOADING'});
  };
  // Clear Users
  const clearUsers = () => {
    dispatch({type: 'CLEAR_USERS'});
  };
  return (
    <GithubContext.Provider
      value={{users: state.users, loading: state.loading}}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
