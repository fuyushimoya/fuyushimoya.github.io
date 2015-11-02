import React, { Component, PropTypes } from 'react';

// Style
import '../styles/main.scss'

/*
  Fetch some data from github.
 */
class Main extends Component {
  render() {
    return (
      <section>
        <h1 className="visually-hidden">Main</h1>
        <nav className="navbar navbar-default" role="navigation">
        </nav>
        <main className="container">
          {this.props.children}
        </main>
      </section>
    );
  }
}

export default Main;