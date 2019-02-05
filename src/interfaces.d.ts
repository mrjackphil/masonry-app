interface IState {
    tiles: ITiles[]
}

interface ITile {
    height: number;
    color: string;
}

interface ITileAction {
    type: string;
    element: ITile;
}
