import React from 'react';
import ReactDOM from 'react-dom';
import Tile from '../components/Tile';

it('Tile rendering without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tile params={{id:0, height:20, color:'red', opened: false}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});