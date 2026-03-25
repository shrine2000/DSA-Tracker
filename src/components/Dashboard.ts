import { getStats } from '../stores/tracker';
import { isWeekend } from '../utils/date';

export const renderDashboard = (totalCount: number) => {
  const { solved, dueToday } = getStats(totalCount);
  const weekend = isWeekend();

  return `
    <div class="dashboard-grid">
      <div class="glass-card stat-item">
        <div class="stat-icon primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
        <div>
          <p class="stat-label">Total Solved</p>
          <p class="stat-value">${solved} <span style="font-size: 1rem; color: var(--text-dim)">/ ${totalCount}</span></p>
        </div>
      </div>

      <div class="glass-card stat-item">
        <div class="stat-icon success" style="${dueToday === 0 ? 'opacity: 0.3' : ''}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>
        </div>
        <div>
          <p class="stat-label">Due Today</p>
          <p class="stat-value" style="color: ${dueToday > 0 ? 'var(--success)' : 'var(--text-dim)'}">${dueToday}</p>
        </div>
      </div>

      <div class="glass-card stat-item">
        <div class="stat-icon warning" style="${!weekend ? 'opacity: 0.3' : ''}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
        <div>
          <p class="stat-label">Weekend Review</p>
          <p class="stat-value" style="color: ${weekend ? 'var(--warning)' : 'var(--text-dim)'}">${weekend ? 'Active' : 'Locked'}</p>
        </div>
      </div>
      <div class="glass-card stat-item" id="random-unsolved" style="cursor: pointer; border-color: var(--primary); background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%);">
        <div class="stat-icon primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path></svg>
        </div>
        <div>
          <p class="stat-label">Quick Start</p>
          <p class="stat-value" style="color: var(--primary)">Shuffle</p>
        </div>
      </div>
    </div>
  `;
};
