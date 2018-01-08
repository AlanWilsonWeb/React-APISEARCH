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
store.subscribe(() => {
searchResults = store.getState().repos;
console.log(searchResults);
  }
);

class FinalResults extends React.Component {
  render() {
    return(
    <div><h1>Results Go Here</h1>
      {/* {store.getState().repos.map((repo) => <p>{repo}</p> )} */}
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
