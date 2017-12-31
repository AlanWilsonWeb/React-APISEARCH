import React from 'react';
import Header from './components/Header';
import { render } from 'react-dom';
import Search from './Search';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducEm from "./reducers/reducEm";
import { createSelector } from 'reselect';

// const resultsSelector = state => state.nextStep;

const store = createStore(reducEm);
let searchResults = "";
let nextStep = "";
let map = "";
store.subscribe(() => {
  searchResults = store.getState();
  nextStep = searchResults.repos;
  console.log(nextStep);
})

class App extends React.Component {
  render() {
    return(
  <div>
  <Provider store={store}>
  <Search />
  </Provider>
</div>
);
}
}

export default App;
