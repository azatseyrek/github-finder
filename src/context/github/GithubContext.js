import {createContext, useState} from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GIHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch(`${GIHUB_URL}/users`, {
      headers: {
        // Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setLoading(false);
  };
  return (
    <GithubContext.Provider value={{users, loading, fetchUsers}}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
