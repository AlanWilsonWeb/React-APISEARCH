import React from 'react';
import Header from './components/Header';
import { render } from 'react-dom';
import Search from './Search';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducEm from "./reducers/reducEm";

const store = createStore(reducEm);
let searchResults = "";
store.subscribe(() => {
  searchResults = store.getState();
  console.log(searchResults.repos)
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
