import React, { Component } from "react";
import "./App.css";
import ModalTile from "./components/ModalTile";
import Grid from "./components/Grid";
import Overlay from "./components/Overlay";
import { connect } from "react-redux";
import { openTile } from "./store/actions";

interface Props {
  tiles: ITile[];
  openTile: typeof openTile;
}
class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  get activeTileParams() {
    return this.props.tiles.filter(el => el.opened === true);
  }

  get activeTileElement() {
    if (this.activeTileParams.length === 1) {
      const el = document.querySelector(
        `#tile_${this.activeTileParams[0].id}`
      ) as HTMLDivElement;
      return el ? el : false;
    } else {
      return false;
    }
  }

  get isModal() {
    if (
      this.props.tiles.filter(tile => tile.loaded).length === 30 &&
      this.activeTileParams.length === 1 &&
      this.activeTileElement
    ) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    const match = window.location.pathname.match(/\/local\/(\d+)/);
    if (match && match.length === 2 && Number(match[1])) {
      this.props.openTile(Number(match[1]));
    }
  }

  render() {
    return (
      <div className="App">
        {this.isModal && <Overlay />}
        {this.isModal && this.activeTileElement && (
          <ModalTile
            index={this.activeTileParams[0].id}
            el={this.activeTileElement}
            color={this.activeTileParams[0].color}
            height={this.activeTileParams[0].height}
          />
        )}
        <Grid />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
  mapStateToProps,
  { openTile }
)(App);
