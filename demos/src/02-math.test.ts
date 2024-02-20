import { calculatePrice, divide, multiply, sum } from './02-math';

test('Adds 1 + 3 should be 4', () => {
	const RESULT = sum(1, 3);

	expect(RESULT).toBe(4);
});

test('Divide 4 / 2 should be 2', () => {
	const RESULT = divide(4, 2);

	expect(RESULT).toBe(2);

	const RESULT_2 = divide(5, 2);

	expect(RESULT_2).toBe(2.5);

	const RESULT_3 = divide(5, 0);

	expect(RESULT_3).toBeNull();
});

test('Multiply 4 * 2 should be 8', () => {
	const RESULT = multiply(4, 2);

	expect(RESULT).toBe(8);
});

test('Price to be 5112', () => {
	const PRICE = calculatePrice({
		distance: 15,
		tokenPrice: 32,
		isRoundtrip: false,
	});

	expect(PRICE).toBe(5112);
});

test('Price to be 10224', () => {
	const PRICE = calculatePrice({
		distance: 15,
		tokenPrice: 32,
		isRoundtrip: true,
	});

	expect(PRICE).toBe(10224);
});
