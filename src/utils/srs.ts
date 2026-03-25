import { addDays, getToday } from './date';

const INTERVALS = [1, 3, 7, 14, 30];

export const getNextRevisionDate = (revisionCount: number) => {
    const interval = INTERVALS[Math.min(revisionCount, INTERVALS.length - 1)];
    return addDays(getToday(), interval);
};
