import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '../components/Grid';
import { createGrid } from '../store/actions';

it('Grid rendering without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Grid tiles={[]} createGrid={createGrid}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});