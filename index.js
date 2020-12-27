"use strict"

const assertNumber = value => {
	if (typeof value !== "number") {
		throw new TypeError(`Expected a number, got ${typeof value}`)
	}
}

const roundIntervals = (method, number, intervals) => {
	assertNumber(number)
	assertNumber(intervals)

	return Math[method](number / intervals) * intervals
}

module.exports = roundIntervals.bind(undefined, "round")
module.exports.up = roundIntervals.bind(undefined, "ceil")
module.exports.down = roundIntervals.bind(undefined, "floor")
