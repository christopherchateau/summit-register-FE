import React from 'react';
import ReactDOM from 'react-dom';
import SignRegister from '..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignRegister />, div);
  ReactDOM.unmountComponentAtNode(div);
});