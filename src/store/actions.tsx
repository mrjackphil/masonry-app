export const CREATE_TILE = 'CREATE_TILE'

export function createTile(elementData: ITile) {
  return { type: CREATE_TILE, element: elementData }
}