import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';

import PropTypes from 'prop-types';

function RepoItem({repo}) {
  const {
    name,
    description,
    html_url,
    open_issues,
    watchers_count,
    stargazers_count,
    language,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-primary badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-secondary badge-lg">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>

          {language && (
            <div className="mr-2 badge badge-gray-500 badge-lg">{language}</div>
          )}
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
