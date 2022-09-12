import React from 'react';
import ReactDOM from 'react-dom';
import PresentationCard from './presentation-card';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PresentationCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});