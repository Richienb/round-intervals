# Round intervals [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/round-intervals/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/round-intervals)

Round a number to the closest interval.

[![NPM Badge](https://nodei.co/npm/round-intervals.png)](https://npmjs.com/package/round-intervals)

## Install

```sh
npm install round-intervals
```

## Usage

```js
const roundIntervals = require("round-intervals");

roundIntervals(1, 5);
//=> 0

roundIntervals(4, 5);
//=> 5

roundIntervals(8, 5);
//=> 10
```

## API

### roundIntervals(number, intervals)

#### number

Type: `number`

The number to round.

#### intervals

Type: `number`

The intervals to use.
