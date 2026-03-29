import { getStats, Problem, getStreak } from '../stores/tracker';

const getMotivation = (streak: number, dueToday: number) => {
  if (dueToday > 0) return `You have ${dueToday} problems to review today. Keep the momentum!`;
  if (streak >= 7) return `Phenomenal! You're on a ${streak} day streak. Keep it up! 🚀`;
  if (streak >= 3) return `Great job! ${streak} days in a row. Stay consistent!`;
  return "";
};

export const renderDashboard = (problems: Problem[]) => {
  const { solved, total, dueToday } = getStats(problems);
  const streak = getStreak();
  const motivation = getMotivation(streak, dueToday);

  return `
    <div class="dashboard-grid">
      <div class="stat-item animate-in">
        <p class="stat-label">Progress</p>
        <p class="stat-value">
          ${solved}<span style="font-size: 1.5rem; color: var(--text-dim); margin-left: 0.5rem; letter-spacing: 0;">/ ${total}</span>
        </p>
      </div>

      <div class="stat-item animate-in" style="animation-delay: 0.1s">
        <p class="stat-label">Daily Streak</p>
        <p class="stat-value" style="color: ${streak > 0 ? 'var(--warning)' : 'var(--text-dim)'}">
          ${streak}${streak > 0 ? '<span style="font-size: 2rem; margin-left: 0.5rem;">🔥</span>' : ''}
        </p>
      </div>

      <div class="stat-item animate-in" style="animation-delay: 0.2s; cursor: pointer; display: flex; align-items: flex-end;" id="random-unsolved">
        <div>
           <p class="stat-label">Quick Review</p>
           <p class="stat-value" style="color: var(--primary); font-size: 2.5rem; text-transform: uppercase;">Shuffle</p>
        </div>
      </div>
    </div>
    
    ${motivation ? `
    <div class="motivation-banner animate-in" style="animation-delay: 0.3s">
        ${motivation}
    </div>` : ''}
  `;
};
