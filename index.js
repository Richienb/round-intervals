"use strict"

module.exports = (number, intervals) => {
    if (typeof number !== "number") {
        throw new TypeError(`Expected a number, got ${typeof number}`)
    }

    if (typeof intervals !== "number") {
        throw new TypeError(`Expected a number, got ${typeof intervals}`)
    }

    return Math.round(number / intervals) * intervals
}
