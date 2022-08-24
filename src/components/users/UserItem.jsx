import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className="card shadow-lg transition-all card-compact hover:scale-105 side bg-neutral-focus text-base-200 group">
      <div className="flex-row items-center space-x-4 card-body ">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14 ">
              <img
                src={
                  avatar_url ||
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvczLrPCr-sR2pANoU5NjErH6JYgbkjUEhQ&usqp=CAU'
                }
                alt="Profile"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title text-base-content font-medium">{login}</h2>
          <Link
            className="text-secondary font-semibold text-opacity-40  hover:text-primary"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
