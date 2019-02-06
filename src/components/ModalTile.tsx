import React, { Component } from 'react'
import './ModalTile.css';
import { closeTile } from '../store/actions';
import { connect } from 'react-redux';

interface Props {
	index: number;
	el: HTMLDivElement;
	color: string;
	height: number;
	tiles: ITile[];
	closeTile: typeof closeTile;
}

export class ModalTile extends Component<Props> {
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
		t.addEventListener('transitionend', () => {
			this.props.closeTile(this.props.index);
		});
	}
}
const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
	mapStateToProps,
	{ closeTile }
)(ModalTile)