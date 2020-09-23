# Round intervals [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/round-intervals/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/round-intervals)

Round a number to the closest interval.

[![NPM Badge](https://nodei.co/npm/round-intervals.png)](https://npmjs.com/package/round-intervals)

## Install

```sh
npm install round-intervals
```

## Usage

```js
const roundIntervals = require("round-intervals")

roundIntervals(1, 5)
//=> 0

roundIntervals(4, 5)
//=> 5

roundIntervals(8, 5)
//=> 10

roundIntervals.up(1, 5)
//=> 5

roundIntervals.up(4, 5)
//=> 5

roundIntervals.down(1, 5)
//=> 0

roundIntervals.down(4, 5)
//=> 0
```

## API

### roundIntervals(number, intervals)

Round `number` to the nearest `interval`.

### roundIntervals.up(number, intervals)

Round `number` up to the nearest `interval`.

### roundIntervals.down(number, intervals)

Round `number` down to the nearest `interval`.

#### number

Type: `number`

The number to round.

#### intervals

Type: `number`

The intervals to round to.
