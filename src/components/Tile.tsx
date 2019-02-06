import React, { Component } from 'react'
import ModalTile from './ModalTile';
import './Tile.css'
import { connect } from 'react-redux';
import { openTile } from '../store/actions';
interface Props {
  params: ITile
  tiles: ITile[],
  openTile: typeof openTile
}
export class Element extends Component<Props> {
	state: {
		el: undefined | HTMLDivElement;
	}
	constructor(props: Props) {
		super(props);

		this.state = {
			el: undefined
		}
	}

  render() {
      return (
        <div>
          <div
            className='tile'
            style={{
              backgroundColor: this.props.params.color,
              height: this.props.params.height
            }}
            onClick={this.click}
          >
          </div>
          {
            this.props.tiles
              .filter( el => el.id === this.props.params.id)
              .filter( el => el.opened === true).length > 0 &&
            this.state.el &&
            <ModalTile index={this.props.params.id}
                       el={this.state.el}
                       color={this.props.params.color}
                       height={this.props.params.height}>
            </ModalTile>
          }
        </div>
      );
	}

	click = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (this.props.tiles.filter( el => el.opened === true).length) { return; }
    this.setState({el: ev.target});
    this.props.openTile(this.props.params.id);
	}
}

const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
  mapStateToProps,
  { openTile }
)(Element)