import {useEffect, useState} from 'react';
import Spinner from '../Spinner';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // later versin i will replace it with rtquery and context/redux
  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex  justify-center ">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1   gap-8 xl:grid-colss-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <h3 key={user.id}>{user.login}</h3>
      ))}
    </div>
  );
};

export default UserResults;
