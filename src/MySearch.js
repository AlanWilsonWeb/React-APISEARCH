import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import { saveRepos } from "./actions/AppActions";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducEm from "./reducers/reducEm";

class MySearch extends React.Component {
  constructor(props) {
    super(props);
    this.msearchGithub()
    }

  msearchGithub = () => {
    fetch('https://api.github.com/users/NannerFox/repos')
      .then(resp => resp.json())
      .then(respJson => {
        this.props.dispatch(saveRepos(respJson));
      })
    };


  render() {
    return(
      <Header title="My Repos" />
    )
  }
}

const mapStateToProps = state => {
  return {repos: state.repos};
};

export default connect(mapStateToProps)(MySearch);
