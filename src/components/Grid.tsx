import { connect } from 'react-redux'
import Tile from './Tile'
import { createGrid } from '../store/actions';
import React, { Component } from 'react'
import { randomTile } from '../lib/random';
import { generateGrid } from '../lib/generate';

interface IGridProps {
  tiles: ITile[],
  createGrid: typeof createGrid
}

export class Grid extends Component<IGridProps> {
  componentDidMount() {
    const colors = ['red', 'blue', 'yellow', 'purple', 'green'];
    const tile = randomTile(100, 300, colors);
    this.props.createGrid( generateGrid(30)(tile)() );
  }

  render() {
    return (
      this.props.tiles.map( (el, index) =>
        <Tile id={el.id} height={el.height} color={el.color} key={el.color + index}></Tile>
      )
    );
  }
}

const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
  mapStateToProps,
  { createGrid }
)(Grid)