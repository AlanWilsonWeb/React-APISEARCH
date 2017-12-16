import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
    'table',
    null,
    React.createElement(
      'tbody',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement('th', null, 'Firstname'),
        React.createElement('th', null, 'Lastname')
        ),
      React.createElement(
        'tr',
        null,
        React.createElement('th', null, 'Janet'),
        React.createElement('th', null, 'James')
        ),
      React.createElement(
        'tr',
        null,
        React.createElement('th', null, 'John'),
        React.createElement('th', null, 'Jameson')
        ),
      ),
    ),
  document.getElementById('root')
);
