import React, { component } from 'react';
import { render } from 'react-dom';
import { Home, Mine, Searchp } from './screens';


const Index = ({ pathname }) => {
  switch(pathname) {
    case "/searchp":
      return <Searchp />;
    case "/mine":
      return <Mine />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<div><Index pathname={pathname} /></div>, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});
