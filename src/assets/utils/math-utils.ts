export const summary = (...items: number[]): number => {
	return items.reduce((prev, next) => (prev += next), 0);
};
