import React from 'react';
import ReactDOM from 'react-dom';
import DrinkList from './drink-list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrinkList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
