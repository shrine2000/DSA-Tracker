import { getNextRevisionDate } from '../utils/srs';
import { getToday } from '../utils/date';

export interface Problem {
    id: number;
    name: string;
    category: string;
    difficulty: string;
    link?: string;
    isCustom?: boolean;
}

export interface ProblemStatus {
    id: number;
    completedDate: string | null;
    lastRevisedDate: string | null;
    revisionCount: number;
    nextRevisionDate: string | null;
}

const STORAGE_KEY = 'neetcode-150-tracker';
const CUSTOM_PROBLEMS_KEY = 'dsa-tracker-custom-problems';

export const getTrackerState = (): Record<number, ProblemStatus> => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
};

const saveTrackerState = (state: Record<number, ProblemStatus>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const getCustomProblems = (): Problem[] => {
    const data = localStorage.getItem(CUSTOM_PROBLEMS_KEY);
    return data ? JSON.parse(data) : [];
};

export const addCustomProblem = (name: string, link: string, category: string, difficulty: string): Problem => {
    const customProblems = getCustomProblems();
    const newProblem: Problem = {
        id: Date.now(), // Use timestamp for unique ID
        name,
        link,
        category,
        difficulty,
        isCustom: true
    };

    customProblems.push(newProblem);
    localStorage.setItem(CUSTOM_PROBLEMS_KEY, JSON.stringify(customProblems));
    return newProblem;
};

const STREAK_KEY = 'dsa-tracker-streak';

interface StreakState {
    current: number;
    lastDate: string | null;
}

export const getStreak = (): number => {
    const data = localStorage.getItem(STREAK_KEY);
    const state: StreakState = data ? JSON.parse(data) : { current: 0, lastDate: null };

    // Check if streak is broken
    if (state.lastDate) {
        const last = new Date(state.lastDate);
        last.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const diffDays = Math.floor((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            state.current = 0;
            state.lastDate = null;
            localStorage.setItem(STREAK_KEY, JSON.stringify(state));
        }
    }

    return state.current;
};

const updateStreak = () => {
    const data = localStorage.getItem(STREAK_KEY);
    const state: StreakState = data ? JSON.parse(data) : { current: 0, lastDate: null };

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];

    if (state.lastDate === todayStr) return; // Already updated today

    if (state.lastDate) {
        const last = new Date(state.lastDate);
        last.setHours(0, 0, 0, 0);
        const diffDays = Math.floor((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            state.current += 1;
        } else {
            state.current = 1;
        }
    } else {
        state.current = 1;
    }

    state.lastDate = todayStr;
    localStorage.setItem(STREAK_KEY, JSON.stringify(state));
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
    updateStreak();
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
    updateStreak();
    return state[problemId];
};

export const getStats = (problems: Problem[]) => {
    const state = getTrackerState();
    const solved = Object.keys(state).length;
    const total = problems.length;
    const today = getToday();

    const dueToday = Object.values(state).filter(p => {
        if (!p.nextRevisionDate) return false;
        const nextDate = new Date(p.nextRevisionDate);
        return nextDate <= today;
    }).length;

    return { solved, total, dueToday };
};
