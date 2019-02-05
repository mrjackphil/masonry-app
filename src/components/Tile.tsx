import React, { Component } from 'react'
import './Tile.css';

export default class Element extends Component<ITile> {
    render() {
        return (
            <div className='tile' style={{
                backgroundColor: this.props.color,
                height: this.props.height
            }}></div>
        );
    }
}