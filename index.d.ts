/**
Round `number` to the nearest `interval`.

@param number The number to round.
@param intervals The intervals to round to.

@example
```
import roundIntervals from 'round-intervals';

roundIntervals(1, 5);
//=> 0

roundIntervals(4, 5);
//=> 5

roundIntervals(8, 5);
//=> 10
```
*/
export default function roundIntervals(number: number, intervals: number): number;

/**
Round `number` up to the nearest `interval`.

@param number The number to round.
@param intervals The intervals to round to.

@example
```
import {roundIntervalsUp} from 'round-intervals';

roundIntervalsUp(1, 5);
//=> 5

roundIntervalsUp(4, 5);
//=> 5
```
*/
export function roundIntervalsUp(number: number, intervals: number): number;

/**
Round `number` down to the nearest `interval`.

@param number The number to round.
@param intervals The intervals to round to.

@example
```
import {roundIntervalsDown} from 'round-intervals';

roundIntervalsDown(1, 5);
//=> 0

roundIntervalsDown(4, 5);
//=> 0
```
*/
export function roundIntervalsDown(number: number, intervals: number): number;
