const test = require("ava")
const roundIntervals = require(".")

test("main", t => {
	t.is(roundIntervals(1, 5), 0)
	t.is(roundIntervals(4, 5), 5)
	t.is(roundIntervals(8, 5), 10)
})
