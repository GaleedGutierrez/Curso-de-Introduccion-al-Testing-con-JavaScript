// /* eslint-disable no-console */
describe('Set', () => {
	beforeAll(() => {
		// console.log('Before All');
	});
	afterAll(() => {
		// console.log('After All');
	});
	beforeEach(() => {
		// console.log('Before Each');
	});
	afterEach(() => {
		// console.log('After Each');
	});
	test('Case 1', () => {
		// console.log('Case 1');
		expect(1 + 1).toBe(2);
	});
	describe('Other group', () => {
		test('Case 2', () => {
			// console.log('Case 2');
			expect(1 + 1).toBe(2);
		});
		test('Case 3', () => {
			// console.log('Case 3');
			expect(1 + 1).toBe(2);
		});
	});
});
