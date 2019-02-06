import React, { Component } from 'react'
import './ModalTile.css';

interface Props {
	el: HTMLDivElement;
	color: string;
	height: number;
}

export default class ModalTile extends Component<Props> {
	constructor(props: Props) {
		super(props);
		this.state = {
			backgroundColor: this.props.color,
			top: this.props.el.getBoundingClientRect().top,
			left: this.props.el.getBoundingClientRect().left,
			height: this.props.height,
			width: '200px'
		}
	}

	render() {
		return (
			<div className='tile-modal' style={ this.state }
			onClick={this.click}
			></div>
		)
	}

	close = () => {
		this.setState({
			backgroundColor: this.props.color,
			top: this.props.el.getBoundingClientRect().top,
			left: this.props.el.getBoundingClientRect().left,
			height: this.props.height,
			width: '200px'
		});
	}

	open = () => {
		this.setState({
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
		})
	}

	componentDidMount = () => {
		this.close();
		this.open();
	}

	click = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.close();
		const t = ev.target as HTMLDivElement;
		t.addEventListener('transitionend', () =>
			t.remove())
	}
}