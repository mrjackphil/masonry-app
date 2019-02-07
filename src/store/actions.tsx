export const CREATE_TILE = "CREATE_TILE";
export const CREATE_GRID = "CREATE_GRID";
export const OPEN_TILE = "OPEN_TILE";
export const CLOSE_TILE = "CLOSE_TILE";
export const LOADED_TILE = "LOADED_TILE";

export function createTile(elementData: ITile) {
  return { type: CREATE_TILE, element: elementData };
}

export function createGrid(elements: ITile[]) {
  return { type: CREATE_GRID, elements: elements };
}

export function openTile(elementID: number) {
  return { type: OPEN_TILE, id: elementID };
}

export function closeTile(elementID: number) {
  return { type: CLOSE_TILE, id: elementID };
}

export function tileLoaded(elementID: number) {
  return { type: LOADED_TILE, id: elementID };
}
