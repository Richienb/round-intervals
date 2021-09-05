import test from 'ava';
import roundIntervals, {roundIntervalsUp, roundIntervalsDown} from './index.js';

test('roundIntervals()', t => {
	t.is(roundIntervals(1, 5), 0);
	t.is(roundIntervals(4, 5), 5);
	t.is(roundIntervals(8, 5), 10);
});

test('roundIntervalsUp()', t => {
	t.is(roundIntervalsUp(1, 5), 5);
	t.is(roundIntervalsUp(4, 5), 5);
	t.is(roundIntervalsUp(8, 5), 10);
});

test('roundIntervalsDown()', t => {
	t.is(roundIntervalsDown(1, 5), 0);
	t.is(roundIntervalsDown(4, 5), 0);
	t.is(roundIntervalsDown(8, 5), 5);
});
