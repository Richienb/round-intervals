# round-intervals

Round a number to the closest interval.

## Install

```sh
npm install round-intervals
```

## Usage

```js
import roundIntervals, {roundIntervalsUp, roundIntervalsDown} from 'round-intervals';

roundIntervals(1, 5);
//=> 0

roundIntervals(4, 5);
//=> 5

roundIntervals(8, 5);
//=> 10

roundIntervalsUp(1, 5);
//=> 5

roundIntervalsUp(4, 5);
//=> 5

roundIntervalsDown(1, 5);
//=> 0

roundIntervalsDown(4, 5);
//=> 0
```

## API

### roundIntervals(number, intervals)

Round `number` to the nearest `interval`.

### roundIntervalsUp(number, intervals)

Round `number` up to the nearest `interval`.

### roundIntervalsDown(number, intervals)

Round `number` down to the nearest `interval`.

#### number

Type: `number`

The number to round.

#### intervals

Type: `number`

The intervals to round to.
