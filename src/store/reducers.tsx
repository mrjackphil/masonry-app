import { CREATE_TILE } from './actions'
import { combineReducers } from 'redux'

const initialState: ITile[] = [];

function tiles(state = initialState, action: ITileAction) {
  switch (action.type) {
    case CREATE_TILE:
      return [
          ...state,
          action.element
        ];
    default:
      return [];
  }
}

const layoutApp = combineReducers({
  tiles
})

export default layoutApp