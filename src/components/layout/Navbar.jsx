import {FaGithub} from 'react-icons/fa';
import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router-dom';
import ThemeSetter from '../ThemeSetter';

const Navbar = ({title}) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto ">
        <div className="flex-none px-2 mx-2 group">
          <FaGithub
            onClick={() => navigate('/')}
            className="inline pr-2 text-5xl transition-all hover: cursor-pointer group-active:text-primary group-active:text-4xl"
          />
          <Link
            to="/"
            className="text-lg font-bold align-middle hover:text-primary-content transition-all active:text-sm"
          >
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2 ">
          <div className="flex justify-end h-full">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn hover:text-primary-content"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn hover:text-primary-content"
            >
              About
            </Link>
            <div className="my-auto pl-10">
              <ThemeSetter />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
