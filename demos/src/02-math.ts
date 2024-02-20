export function sum(a: number, b: number) {
	return a + b;
}

export function multiply(a: number, b: number) {
	return a * b;
}

export function divide(a: number, b: number) {
	if (b === 0) {
		return null;
	}

	return a / b;
}

const KM_IN_METERS = 1000;
const DISTANCE_BILLED = 100; // Unit meter
const TRIP_CONST = KM_IN_METERS / DISTANCE_BILLED;
const LOWERED_FLAG = 312; // Price in ARS. Change every month.

/**
 * Calculate the price of the trip according to distance, token price and if it is round trip.
 * @returns Price of the trip in ARS.
 */
export function calculatePrice({
	distance,
	tokenPrice,
	isRoundtrip = false,
}: {
	distance: number;
	tokenPrice: number;
	isRoundtrip: boolean;
}) {
	const PRICE = LOWERED_FLAG + TRIP_CONST * distance * tokenPrice;

	return isRoundtrip ? PRICE * 2 : PRICE;
}
