interface IState {
    tiles: ITiles[]
}

interface ITile {
	id: number;
    height: number;
	color: string;
	opened: boolean;
}

interface ITileAction {
	type: string;
	id: number;
	element: ITile;
	elements: ITile[];
}
