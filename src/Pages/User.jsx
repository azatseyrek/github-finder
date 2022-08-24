import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Spinner from '../components/Spinner';
import GithubContext from '../context/github/GithubContext';

const User = () => {
  const {user, fetchUser, loading} = useContext(GithubContext);
  console.log(user);

  const {login} = useParams();
  useEffect(() => {
    fetchUser(login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="  w-900 flex justify-center">
        <Spinner />
      </div>
    );
  }
  return <div>{login}</div>;
};

export default User;
