interface IState {
    tiles: ITiles[]
}

interface ITile {
	id: number;
    height: number;
    color: string;
}

interface ITileAction {
	type: string;
	id: string;
	element: ITile;
	elements: ITile[];
}
