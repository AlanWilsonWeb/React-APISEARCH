import React, { component } from 'react';
import { render } from 'react-dom';
import Search from './Search';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducEm from "./reducers/reducEm";

// import { Home, Mine, Search } from './screens';
//
// const Index = ({ pathname }) => {
//   switch(pathname) {
//     case "/search":
//       return <Search />;
//     case "/mine":
//       return <Mine />;
//     default:
//       return <Home />;
//   }
// };
//
// let pathname = window.location.pathname;
//
// render(<Index pathname={pathname} />, document.getElementById("root"));
//
//  window.addEventListener("popstate", () => {
//   pathname = window.location.pathname;
// });
const store = createStore(reducEm);

render(
  <Provider store={store}>
  <Search />
</Provider>,
  document.getElementById("root")
);
