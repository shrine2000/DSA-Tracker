import { getNextRevisionDate } from '../utils/srs';
import { getToday } from '../utils/date';

export interface ProblemStatus {
    id: number;
    completedDate: string | null;
    lastRevisedDate: string | null;
    revisionCount: number;
    nextRevisionDate: string | null;
}

const STORAGE_KEY = 'neetcode-150-tracker';

export const getTrackerState = (): Record<number, ProblemStatus> => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
};

const saveTrackerState = (state: Record<number, ProblemStatus>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const markProblemAsDone = (problemId: number) => {
    const state = getTrackerState();
    const today = getToday().toISOString();

    state[problemId] = {
        id: problemId,
        completedDate: today,
        lastRevisedDate: today,
        revisionCount: 0,
        nextRevisionDate: getNextRevisionDate(0).toISOString()
    };

    saveTrackerState(state);
    return state[problemId];
};

export const reviseProblem = (problemId: number) => {
    const state = getTrackerState();
    const problem = state[problemId];
    if (!problem) return;

    const today = getToday().toISOString();
    const newRevisionCount = problem.revisionCount + 1;

    state[problemId] = {
        ...problem,
        lastRevisedDate: today,
        revisionCount: newRevisionCount,
        nextRevisionDate: getNextRevisionDate(newRevisionCount).toISOString()
    };

    saveTrackerState(state);
    return state[problemId];
};

export const getStats = (totalCount: number) => {
    const state = getTrackerState();
    const solved = Object.values(state).filter(p => p.completedDate).length;
    const today = getToday();

    const dueToday = Object.values(state).filter(p => {
        if (!p.nextRevisionDate) return false;
        const nextDate = new Date(p.nextRevisionDate);
        return nextDate <= today;
    }).length;

    return { solved, total: totalCount, dueToday };
};
