import React, { Component } from "react";
import "./Tile.css";
import { connect } from "react-redux";
import { openTile, tileLoaded } from "../store/actions";
interface Props {
  params: ITile;
  tiles: ITile[];
  openTile: typeof openTile;
  tileLoaded: typeof tileLoaded;
}
export class Element extends Component<Props> {
  state: {
    el: undefined | HTMLDivElement;
  };
  constructor(props: Props) {
    super(props);

    this.state = {
      el: undefined
    };
  }

  componentDidMount() {
    const el = document.querySelector(
      `#tile_${this.props.params.id}`
    ) as HTMLDivElement;
    if (el) {
      el.addEventListener("transitionend", () => {
        this.props.tileLoaded(this.props.params.id);
      });
    }
  }

  render() {
    return (
      <div>
        <div
          className="tile"
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

  click = () => {
    this.props.openTile(this.props.params.id);
  };
}

const mapStateToProps = (state: IState) => ({ tiles: state.tiles });

export default connect(
  mapStateToProps,
  { openTile, tileLoaded }
)(Element);
