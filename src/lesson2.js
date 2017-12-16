import React from 'react';
import ReactDOM from 'react-dom';

//   ReactDOM.render(
//     <div>
//     <h1>Tips for breaking down a new concept</h1>
//     <div>
//         <ul>
//             <li>Many concepts can't be tackled all at once</li>
//             <ul>
//                 <li>Work with the parts you can understand</li>
//                 <li>Take breaks to stay fresh</li>
//             </ul>
//             <li>Develop a plan to learn the parts you don't know</li>
//             <ul>
//                 <li>Start with the parts that you know</li>
//                 <li>Build new concepts on top</li>
//             </ul>
//         </ul>
//     </div>
// </div>,
//     document.getElementById('root')
//   );

const libraries = [
  {
    id: 1,
    title: 'React',
    description: 'A JavaScript library for building user interfaces'
  },
  {
    id: 2,
    title: 'Redux',
    description: 'A predictable state container for JavaScript apps'
  },
  {
    id: 3,
    title: 'Reselect',
    description: 'A simple selector library for Redux'
  }
];
const makeDescriptions = item =>
  (
    <div key={item.id}>
      <p>{item.title}: {item.description}</p>
    </div>
  );

const output = libraries.map(makeDescriptions);

ReactDOM.render(<div>{output}</div>, document.getElementById('root'));
