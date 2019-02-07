export const generateGrid = (limit: number) => <T extends ITile>(obj: () => T) => (ar: T[] = [] ): T[] =>
	ar.length < limit ? generateGrid(limit)(obj)(ar.concat([addLastId(ar, obj())])) : ar;

const addId = <T>(id: number, obj: T) => {
	return Object.assign(obj, {id: id});
}

const getLastId = <T extends ITile>(ar: T[]) => {
	const last = ar[ar.length - 1];
	return last && typeof last.id !== 'undefined' ? last.id + 1 : 0;
}

const addLastId = <T>(ar: any[], obj: T) => {
	return addId( getLastId(ar), obj );
}