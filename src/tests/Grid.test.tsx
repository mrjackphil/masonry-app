import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '../components/Grid';
import { createTile } from '../store/actions';

it('Grid rendering without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Grid tiles={[]} createTile={createTile}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});