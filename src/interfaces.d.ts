interface IState {
    tiles: ITiles[]
}

interface ITile {
	id: number;
    height: number;
	color: string;
	opened: boolean;
	loaded: boolean;
}

interface ITileAction {
	type: string;
	id: number;
	element: ITile;
	elements: ITile[];
}
