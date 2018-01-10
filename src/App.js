import React from 'react';
import Header from './components/Header';
import { render } from 'react-dom';
import Search from './Search';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducEm from "./reducers/reducEm";

let searchResults = "";
let nextStep = "";
const store = createStore(reducEm);

class FinalResults extends React.Component {

  state = {
    repos: []
  }

  componentDidMount() {
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.

      console.log(store.getState().repos);

      this.setState({
        repos: store.getState().repos
      });
    });
  }

  render() {
    return(
    <div><h2>Search Results:</h2>
      {this.state.repos.map((repo, index) => <div key={index}>
        <div id={repo.id} className="fullrepo">
          <a href={repo.owner.html_url}><div className="leftside">
            <div className="piccarrier"><img className="userpic" src={repo.owner.avatar_url} /></div>
            <div className="username">{repo.owner.login}</div>
          </div></a>
          <a href={repo.html_url}><div className="rightside">
            <div className="repotitle"><h3>{repo.name}</h3></div>
            <div className="description">{repo.description}</div>
          </div></a>
      </div>
    </div> )}
  </div>
  );
  }
  }

class App extends React.Component {
  render() {
    return(
  <div>
  <Provider store={store}>
  <Search />
  </Provider>
  <FinalResults />
</div>
);
}
}

export default App;
