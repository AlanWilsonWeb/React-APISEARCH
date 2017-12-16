import React from 'react';
import ReactDOM from 'react-dom';

const Welcome = props => {
  return <h1>{props.pickle}</h1>;
}

ReactDOM.render(
  <div>
    <Welcome pickle="Death To Smoochie!" />
    <Welcome pickle="I've got something to say?" />
    <Welcome pickle="I hope to god this works!" />
  </div>
  ,
  document.getElementById('root')
)
