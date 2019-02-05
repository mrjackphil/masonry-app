import { connect } from 'react-redux'
import Tile from './Tile'
import { createTile } from '../store/actions';
import React, { Component } from 'react'

interface IGridProps {
  tiles: ITile[],
  createTile: typeof createTile
}

export class Grid extends Component<IGridProps> {
  componentDidMount() {
    this.props.createTile({
      height: 20,
      color: 'red'
    })
  }

  render() {
    return (
      this.props.tiles.map( el =>
        <Tile height={el.height} color={el.color}></Tile>
      )
    );
  }
}

const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
  mapStateToProps,
  { createTile }
)(Grid)