"use strict"

const roundIntervals = (method, number, intervals) => {
	if (typeof number !== "number") {
		throw new TypeError(`Expected a number, got ${typeof number}`)
	}

	if (typeof intervals !== "number") {
		throw new TypeError(`Expected a number, got ${typeof intervals}`)
	}

	return Math[method](number / intervals) * intervals
}

module.exports = roundIntervals.bind(undefined, "round")
module.exports.up = roundIntervals.bind(undefined, "ceil")
module.exports.down = roundIntervals.bind(undefined, "floor")
