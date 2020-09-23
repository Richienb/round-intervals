const test = require("ava")
const roundIntervals = require(".")

test("roundIntervals()", t => {
	t.is(roundIntervals(1, 5), 0)
	t.is(roundIntervals(4, 5), 5)
	t.is(roundIntervals(8, 5), 10)
})

test("roundIntervals.up()", t => {
	t.is(roundIntervals.up(1, 5), 5)
	t.is(roundIntervals.up(4, 5), 5)
	t.is(roundIntervals.up(8, 5), 10)
})

test("roundIntervals.down()", t => {
	t.is(roundIntervals.down(1, 5), 0)
	t.is(roundIntervals.down(4, 5), 0)
	t.is(roundIntervals.down(8, 5), 5)
})
