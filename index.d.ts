declare const roundIntervals: {
	/**
	Round `number` up to the nearest `interval`.
	@param number The number to round.
	@param intervals The intervals to round to.
	@example
	```
	const roundIntervals = require("round-intervals")

	roundIntervals.up(1, 5)
	//=> 5

	roundIntervals.up(4, 5)
	//=> 5
	```
	*/
	up: (number: number, intervals: number) => number

	/**
	Round `number` down to the nearest `interval`.
	@param number The number to round.
	@param intervals The intervals to round to.
	@example
	```
	const roundIntervals = require("round-intervals")

	roundIntervals.down(1, 5)
	//=> 0

	roundIntervals.down(4, 5)
	//=> 0
	```
	*/
	down: (number: number, intervals: number) => number

	/**
    Round `number` to the nearest `interval`.
    @param number The number to round.
    @param intervals The intervals to round to.
    @example
    ```
    const roundIntervals = require("round-intervals")

    roundIntervals(1, 5)
    //=> 0

    roundIntervals(4, 5)
    //=> 5

    roundIntervals(8, 5)
    //=> 10
    ```
    */
	(number: number, intervals: number): number
}

export = roundIntervals
