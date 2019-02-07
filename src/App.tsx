import React, { Component } from 'react';
import './App.css';
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

  render() {
    return (
      <div className="App">
        {
          this.props.tiles.filter( el => el.opened ).length > 0 && <Overlay></Overlay>
        }
        <Grid></Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
  mapStateToProps
)(App)
