import { CREATE_TILE, CREATE_GRID, OPEN_TILE, CLOSE_TILE } from './actions'
import { combineReducers } from 'redux'

const initialState: ITile[] = [];

function tiles(state = initialState, action: ITileAction) {
  switch (action.type) {
	case OPEN_TILE:
		return state.map( el => {
			return el.id === action.id ? Object.assign(el, {opened: true}) : Object.assign(el, {opened: false});
		});
	case CLOSE_TILE:
		return state
			.map( el => el.id === action.id ? Object.assign(el, {opened: false}) : el );
    case CREATE_TILE:
      return [
          ...state,
          action.element
		];
    case CREATE_GRID:
      return action.elements;
    default:
      return [];
  }
}

const layoutApp = combineReducers({
  tiles
})

export default layoutApp