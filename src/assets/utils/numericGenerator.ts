import ArgumentError from '@errors/ArgumentError';

const numericGenerator = (length: number): number[] => {
	if (length < 0) {
		throw new ArgumentError('Generator length have to be positive digit');
	}

	return [...Array(length).keys()];
};

export default numericGenerator;
