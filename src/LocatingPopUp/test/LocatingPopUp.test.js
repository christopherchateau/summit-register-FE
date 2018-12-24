import React from 'react';
import ReactDOM from 'react-dom';
import LocationPopUp from '..';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocationPopUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});