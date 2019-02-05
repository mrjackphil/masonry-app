export const generateGrid = (limit: number) => <T>(obj: () => T) => (ar: T[] = [] ): T[] =>
	ar.length < limit ? generateGrid(limit)(obj)(ar.concat([obj()])) : ar;
