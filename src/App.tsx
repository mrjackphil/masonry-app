import React, { Component } from 'react';
import './App.css';
import ModalTile from './components/ModalTile';
import Grid from './components/Grid';
import Overlay from './components/Overlay';
import { connect } from 'react-redux';

interface Props {
  tiles: ITile[]
}
class App extends Component<Props> {
  constructor(props: Props) {
	super(props);

  }

  get activeTileParams() {
	return this.props.tiles
		.filter( el => el.opened === true);
  }

  get activeTileElement() {
	  if (this.activeTileParams.length === 1) {
		const el = document.querySelector(`#tile_${this.activeTileParams[0].id}`) as HTMLDivElement;
		return el ? el : null;
	  } else {
		  return null;
	  }
  }

  render() {
    return (
      <div className="App">
        {
          this.props.tiles.filter( el => el.opened ).length > 0 && <Overlay></Overlay>
        }
        <Grid></Grid>
		{
			this.activeTileParams.length === 1 &&
			this.activeTileElement &&
            <ModalTile index={this.activeTileParams[0].id}
                       el={this.activeTileElement}
                       color={this.activeTileParams[0].color}
                       height={this.activeTileParams[0].height}>
            </ModalTile>
          }
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
  mapStateToProps
)(App)
