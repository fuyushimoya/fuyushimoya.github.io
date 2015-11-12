import Axios from 'axios';

/**
 * Get user's github info from github
 * @param  {string} username  User's account name on github.
 * @return {Promise}          A promise which resolves with user info
 */
function getUserInfo (username) {
  return Axios.get(`https://api.github.com/users/${username}`);
}

/**
 * Get user's github info from github
 * @param  {string} username  User's account name on github.
 * @return {Promise}          A promise which resolves with user's repos.
 */
function getUserRepository (username) {
  return Axios.get(`https://api.github.com/users/${username}/repos`);
}

const GithubHelper = {
  getGithubInfo(username) {
    return Promise.all([getUserInfo(username), getUserRepository(username)])
      .then(([{data: info}, {data: repos}]) => {
        return {
          info,
          repos
        };
      });
  }
};

export default GithubHelper;