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

export class ModalTile extends Component<Props, {actual: any, base: any}> {
	constructor(props: Props) {
		super(props);
		this.state = {
			actual: {
				backgroundColor: this.props.color,
				top: this.props.el.getBoundingClientRect().top,
				left: this.props.el.getBoundingClientRect().left,
				height: this.props.height,
				width: '200px'
			},
			base: {
				backgroundColor: this.props.color,
				top: this.props.el.getBoundingClientRect().top,
				left: this.props.el.getBoundingClientRect().left,
				height: this.props.height,
				width: '200px'
			}
		}
	}

	render() {
		return (
			<div className='tile-modal' style={ this.state.actual }
					onClick={this.click}
			></div>
		)
	}

	hideOverlay = () => {
		const app = document.querySelector('.App') as HTMLDivElement;
		const overlay = document.querySelector('.overlay') as HTMLDivElement;
		if (overlay) {
			overlay.classList.remove('shown');
		}

		if (app) {
			app.classList.remove('hide');
		}
	}

	showOverlay = () => {
		const app = document.querySelector('.App') as HTMLDivElement;
		const overlay = document.querySelector('.overlay') as HTMLDivElement;
		if (overlay) {
			overlay.classList.add('shown');
		}

		if (app) {
			app.classList.add('hide');
		}
	}

	close = () => {
		this.hideOverlay();
		this.setState({
			...this.state,
			actual: this.state.base
		});
	}

	open = () => {
		this.showOverlay();
		this.setState({
			...this.state,
			actual: {
				...this.state.actual,
				top: 0,
				left: 0,
				height: '100%',
				width: '100%',
			}
		})
	}

	componentDidMount = () => {
		this.setState({
			...this.state,
			base: {
				backgroundColor: this.props.color,
				top: this.props.el.getBoundingClientRect().top,
				left: this.props.el.getBoundingClientRect().left,
				height: this.props.height,
				width: '200px'
			}
		});
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