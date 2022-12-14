import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="hero text-stone-600 font-mono   ">
      <div className="text-center hero-content">
        <div className="w-full">
          <h1 className="text-6xl bold mb-8">Oops </h1>
          <p className="text-5xl">404 - Page not found!</p>
          <Link to="/" className="btn btn-lg rounded-btn m-6">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
