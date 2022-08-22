import {useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../Spinner';
import UserItem from './UserItem';

const UserResults = () => {
  const {users, loading} = useContext(GithubContext);

  console.log(users);

  if (loading) {
    return (
      <div className="flex  justify-center ">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-colss-4 lg:grid-cols-3 md:grid-cols-2">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserResults;
