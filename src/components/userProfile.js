'use strict';
import React from 'react';

class UserProfile extends React.Component {
  render() {
    return (
      <section className="col-md-4">
        <header className="offscreen">
          <h3>User Profile</h3>
        </header>
        <ul className="list-group">
          {this.props.info.avatar_url && <li className="list-group-item"> <img src={this.props.info.avatar_url} className="img-rounded img-responsive"/></li>}
          {this.props.info.name && <li className="list-group-item">Name: {this.props.info.name}</li>}
          {this.props.info.login && <li className="list-group-item">Username: {this.props.info.login}</li>}
          {this.props.info.email && <li className="list-group-item">Email: {this.props.info.email}</li>}
          {this.props.info.location && <li className="list-group-item">Location: {this.props.info.location}</li>}
          {this.props.info.company && <li className="list-group-item">Company: {this.props.info.company}</li>}
          {this.props.info.public_repos && <li className="list-group-item">Public Repos: {this.props.info.public_repos}</li>}
          {this.props.info.blog && <li className="list-group-item">Blog: <a href={this.props.info.blog}> {this.props.info.blog}</a></li>}
        </ul>
      </section>
    );
  }
};
UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  info: React.PropTypes.object.isRequired
};

export default UserProfile;