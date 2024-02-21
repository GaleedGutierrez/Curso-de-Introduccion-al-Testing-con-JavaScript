import { Person } from './06-person.ts';

describe('Test for Person Class', () => {
	let person: Person;

	beforeEach(() => {
		person = new Person('Galeed', 45, 1.71);
	});
	test('Should return down', () => {
		person.weight = 45;

		const IMC = person.calcIMC();

		expect(IMC).toBe('down');
	});

	test('Should return normal', () => {
		person.weight = 59;

		const IMC = person.calcIMC();

		expect(IMC).toBe('normal');
	});

	test('Should return overweight level 1', () => {
		person.weight = 86;

		const IMC = person.calcIMC();

		expect(IMC).toBe('overweight level 1');
	});
});
