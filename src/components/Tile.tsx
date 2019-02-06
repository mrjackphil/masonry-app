import React, { Component } from 'react'
import ModalTile from './ModalTile';
import './Tile.css'

export default class Element extends Component<ITile> {
	state: {
		active: boolean;
		el: undefined | HTMLDivElement;
	}
	constructor(props: ITile) {
		super(props);

		this.state = {
			active: false,
			el: undefined
		}
	}

  render() {
      return (
        <div>
          <div
            className='tile'
            style={{
              backgroundColor: this.props.color,
              height: this.props.height
            }}
            onClick={this.click}
          >
          </div>
          { this.state.active && this.state.el &&
            <ModalTile el={this.state.el} color={this.props.color} height={this.props.height}></ModalTile> }
        </div>
      );
	}

	click = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    this.setState({active: !this.state.active, el: ev.target});
	}
}