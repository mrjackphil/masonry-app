import { connect } from 'react-redux';
import Tile from './Tile';
import { createGrid } from '../store/actions';
import React, { Component } from 'react'
import { randomTile } from '../lib/random';
import { generateGrid } from '../lib/generate';
import Masonry from 'react-masonry-component';
import './Grid.css';

interface IGridProps {
  tiles: ITile[],
  createGrid: typeof createGrid
}

const masonryOptions = {
  itemSelector: '.tile',
  fitWidth: true
}

export class Grid extends Component<IGridProps> {
  componentDidMount() {
    const colors = ['#f5ad92', '#ed717f', '#c67486', '#765e8d', '#00577f'];
    const tile = randomTile(100, 300, colors);
    this.props.createGrid( generateGrid(30)(tile)() );
  }

  render() {
    return (
      <Masonry options={masonryOptions} className="grid">
        {
          this.props.tiles.map( (el, index) =>
            <Tile params={el} key={el.color + index}></Tile>
          )
        }
      </Masonry>
    );
  }
}

const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
  mapStateToProps,
  { createGrid }
)(Grid)