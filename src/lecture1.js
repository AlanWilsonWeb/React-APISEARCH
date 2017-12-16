import React from 'react';
import ReactDOM from 'react-dom';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Nanner" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
let key = 0;

const cars = ['1999', '2000', '2001'];
const listCars = cars.map(car => <li key={key++}>{car}</li>)

function carList() {
  return (
    <ul>
      {listCars}
    </ul>
  )
}

ReactDOM.render(
  carList(),
  document.getElementById('root')
)