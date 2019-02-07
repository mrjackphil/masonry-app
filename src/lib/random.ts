export const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const randomElement = <T>(ar: T[]) =>
  ar[Math.floor(Math.random() * ar.length)];

export const randomTile = (
  minwidth: number,
  maxwidth: number,
  colorsArray: string[]
) => () => {
  return {
	id: 0,
    height: random(minwidth, maxwidth),
	color: randomElement(colorsArray),
	opened: false,
	loaded: false
  };
};
