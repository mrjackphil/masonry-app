import { CREATE_TILE, CREATE_GRID } from './actions'
import { combineReducers } from 'redux'

const initialState: ITile[] = [];

function tiles(state = initialState, action: ITileAction) {
  switch (action.type) {
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