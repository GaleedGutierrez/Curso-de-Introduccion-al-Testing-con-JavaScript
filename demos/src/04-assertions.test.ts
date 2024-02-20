test('test obj', () => {
	const DATA = { name: 'Galeed', lastname: '' };

	DATA.lastname = 'Gutierrez';
	expect(DATA).toEqual({ name: 'Galeed', lastname: 'Gutierrez' });
});

test('null', () => {
	const DATA = null;

	expect(DATA).toBeNull();
	expect(DATA).toBeDefined();
	expect(DATA).not.toBeUndefined();
});

test('null', () => {
	expect(true).toEqual(true);
	expect(false).toEqual(false);
	expect(0).toBeFalsy();
	expect('').toBeFalsy();
	expect(false).toBeFalsy();
	expect([]).toBeTruthy();
});

test('string', () => {
	expect('Christian').toMatch(/an/);
});

test('List / Arrays', () => {
	const NUMBERS = [1, 2, 3, 4];

	expect(NUMBERS).toContain(2);
});
