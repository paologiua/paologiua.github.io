import React from 'react';
import ReactDOM from 'react-dom';
import RoundedImage from './rounded-image';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoundedImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});