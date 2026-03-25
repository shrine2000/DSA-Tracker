import { getTrackerState } from '../stores/tracker';
import { isWeekend, getToday } from '../utils/date';

interface Problem {
  id: number;
  name: string;
  category: string;
  difficulty: string;
}

export const renderProblemList = (problems: Problem[], activeFilter: string) => {
  const state = getTrackerState();
  const today = getToday();

  const filteredProblems = problems.filter(p => {
    const pState = state[p.id];
    if (activeFilter === 'all') return true;
    if (activeFilter === 'due') {
      if (!pState || !pState.nextRevisionDate) return false;
      return new Date(pState.nextRevisionDate) <= today;
    }
    if (activeFilter === 'solved') return !!pState;
    if (activeFilter === 'weekend') {
      if (!pState || !isWeekend()) return false;
      // Weekend review: problems done in the current week (from Monday)
      const monday = new Date();
      monday.setDate(today.getDate() - (today.getDay() || 7) + 1);
      monday.setHours(0, 0, 0, 0);
      return new Date(pState.completedDate!) >= monday;
    }
    return p.category === activeFilter;
  });

  const categories = Array.from(new Set(problems.map(p => p.category)));

  return `
    <div class="problem-container">
      <div class="filters">
        <button class="filter-btn ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
        <button class="filter-btn ${activeFilter === 'due' ? 'active' : ''}" data-filter="due">Due Today</button>
        <button class="filter-btn ${activeFilter === 'solved' ? 'active' : ''}" data-filter="solved">Solved</button>
        <button class="filter-btn ${activeFilter === 'weekend' ? 'active' : ''}" data-filter="weekend">Weekend Special</button>
        ${categories.map(cat => `
          <button class="filter-btn ${activeFilter === cat ? 'active' : ''}" data-filter="${cat}">${cat}</button>
        `).join('')}
        <button class="random-btn" id="random-unsolved" title="Pick a random unsolved problem">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>
          Shuffle
        </button>
      </div>

      <div class="problem-list">
        ${filteredProblems.map(p => {
    const pState = state[p.id];
    const isSolved = !!pState;
    const isDue = pState && pState.nextRevisionDate && new Date(pState.nextRevisionDate) <= today;
    const diffClass = p.difficulty === 'Easy' ? 'diff-easy' : p.difficulty === 'Medium' ? 'diff-medium' : 'diff-hard';

    return `
            <div class="glass-card problem-item animate-in" data-problem-id="${p.id}">
              <div class="problem-info">
                <div class="difficulty-tag ${diffClass}">${p.difficulty[0]}</div>
                <div>
                  <h3 class="problem-title">${p.name}</h3>
                  <div class="problem-meta">
                    ${p.category}
                    ${isDue ? '<span class="tag-mini">Review Now</span>' : ''}
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 1.5rem;">
                ${isSolved ? `
                  <div style="text-align: right">
                    <p class="stat-label">Next Rev</p>
                    <p style="font-size: 0.8rem; font-family: monospace;">${new Date(pState.nextRevisionDate!).toLocaleDateString()}</p>
                  </div>
                ` : ''}
                <button class="mark-btn ${isSolved ? 'solved' : ''}" data-id="${p.id}">
                  ${isSolved ? '✓' : '+'}
                </button>
              </div>
            </div>
          `;
  }).join('')}
        ${filteredProblems.length === 0 ? '<div style="text-align: center; padding: 4rem; color: var(--text-dim)">No problems found.</div>' : ''}
      </div>
    </div>
  `;
};
