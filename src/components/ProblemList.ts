import { getTrackerState, Problem } from '../stores/tracker';
import { isWeekend, getToday } from '../utils/date';

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
      const monday = new Date();
      monday.setDate(today.getDate() - (today.getDay() || 7) + 1);
      monday.setHours(0, 0, 0, 0);
      return new Date(pState.completedDate!) >= monday;
    }
    return p.category === activeFilter;
  });

  const categories = Array.from(new Set(problems.map(p => p.category))).sort();

  return `
    <div class="problem-container">
      <div class="filters animate-in">
        <button class="filter-btn ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
        <button class="filter-btn ${activeFilter === 'due' ? 'active' : ''}" data-filter="due">Due</button>
        <button class="filter-btn ${activeFilter === 'solved' ? 'active' : ''}" data-filter="solved">Solved</button>
        ${categories.map(cat => `
          <button class="filter-btn ${activeFilter === cat ? 'active' : ''}" data-filter="${cat}">${cat}</button>
        `).join('')}
      </div>

      <div class="problem-list">
        ${filteredProblems.map((p, index) => {
    const pState = state[p.id];
    const isSolved = !!pState;
    const isDue = pState && pState.nextRevisionDate && new Date(pState.nextRevisionDate) <= today;
    const dotClass = p.difficulty === 'Easy' ? 'dot-easy' : p.difficulty === 'Medium' ? 'dot-medium' : 'dot-hard';

    return `
            <div alt="problem-card" class="problem-item animate-in" style="animation-delay: ${index * 0.05}s" data-problem-id="${p.id}">
              <div class="problem-info">
                <div class="difficulty-dot ${dotClass}"></div>
                <div>
                  ${p.link ?
        `<a href="${p.link}" target="_blank" class="problem-title" onclick="event.stopPropagation()">${p.name}</a>` :
        `<h3 class="problem-title">${p.name}</h3>`
      }
                  <div class="problem-meta">
                    ${p.category} ${isDue ? '• <span style="color: var(--primary); font-weight: 700">Review Now</span>' : ''}
                  </div>
                </div>
              </div>
              
              <button class="mark-btn ${isSolved ? 'solved' : ''}" data-id="${p.id}">
                ${isSolved ? '✓' : '+'}
              </button>
            </div>
          `;
  }).join('')}
        ${filteredProblems.length === 0 ? '<div style="text-align: center; padding: 4rem; color: var(--text-dim)">No problems found.</div>' : ''}
      </div>
    </div>
  `;
};
