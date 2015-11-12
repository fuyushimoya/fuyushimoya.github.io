import React, { Component, PropTypes } from 'react';
import GithubHelper from '../utils/githubHelper';

import userSettings from '../configs/settings';

import UserProfile from './userProfile';

/*
  Fetch some data from github.
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: userSettings.default.username,
      info : {},
      repos: []
    };

    GithubHelper.getGithubInfo(userSettings.github.username)
      .then((userInfo) => {
        this.setState(Object.assign({}, this.state, userInfo));
      })
  }
  render() {
    return (
      <section className="container">
        <h2 className="visually-hidden">Home</h2>
        <UserProfile username={this.state.username} info={this.state.info} />
        <div className="col-md-8 bios">bios</div>
      </section>
    );
  }
}


export default Home;