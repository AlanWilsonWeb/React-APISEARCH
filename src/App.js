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
    <div><h1>Results Go Here</h1>
      {this.state.repos.map((repo, index) => <p key={index}>{repo.name}</p> )}
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
