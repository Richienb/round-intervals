import {expectType} from 'tsd';
import roundIntervals, {roundIntervalsUp, roundIntervalsDown} from './index.js';

expectType<number>(roundIntervals(1.5, 1));
expectType<number>(roundIntervalsUp(1.5, 1));
expectType<number>(roundIntervalsDown(1.5, 1));
