const assertNumber = value => {
	if (typeof value !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof value}`);
	}
};

const roundIntervalsWithRounding = (method, number, intervals) => {
	assertNumber(number);
	assertNumber(intervals);

	return Math[method](number / intervals) * intervals;
};

export default function roundIntervals(number, intervals) {
	return roundIntervalsWithRounding('round', number, intervals);
}

export function roundIntervalsUp(number, intervals) {
	return roundIntervalsWithRounding('ceil', number, intervals);
}

export function roundIntervalsDown(number, intervals) {
	return roundIntervalsWithRounding('floor', number, intervals);
}
