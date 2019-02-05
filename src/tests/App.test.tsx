import React from 'react';
import App from '../App';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const shallow = ShallowRenderer.createRenderer();
  shallow.render(<App />, div);
  shallow.unmount();
});
