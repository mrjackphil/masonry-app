import { random, randomElement, randomTile } from "../../lib/random";

it('Test random(min,max) function', () => {
	expect(random(10, 20)).toBeLessThan(21);
});

it('Test randomElement function', () => {
	expect(randomElement(['1','2','3'])).toBeTruthy();
});

it('Test randomTile function', () => {
	expect(randomTile(100, 100, ['red'])()).toEqual({height: 100, color: 'red'});
});