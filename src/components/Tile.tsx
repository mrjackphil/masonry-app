import React, { Component } from 'react'
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
			id={`tile_${this.props.params.id}`}
            style={{
              backgroundColor: this.props.params.color,
              height: this.props.params.height
            }}
            onClick={this.click}
          >
          {this.props.params.id}
          </div>
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