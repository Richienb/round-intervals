/**
Round a number to the closest interval.
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
declare function roundIntervals(number: number, intervals: number): number

export = roundIntervals
