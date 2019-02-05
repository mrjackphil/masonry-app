export const CREATE_TILE = "CREATE_TILE";
export const CREATE_GRID = "CREATE_GRID";

export function createTile(elementData: ITile) {
  return { type: CREATE_TILE, element: elementData };
}

export function createGrid(elements: ITile[]) {
  return { type: CREATE_GRID, elements: elements };
}
