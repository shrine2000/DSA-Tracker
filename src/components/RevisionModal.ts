import { Problem } from '../stores/tracker';

export const renderRevisionModal = (problem: Problem, revisionCount: number) => {
  const steps = [
    { label: 'Day 0', value: 0 },
    { label: '+1d', value: 1 },
    { label: '+3d', value: 2 },
    { label: '+7d', value: 3 },
    { label: '+14d', value: 4 },
    { label: '+30d', value: 5 }
  ];

  return `
    <div id="modal-overlay" class="modal-overlay">
      <div class="modal-content animate-in">
        <button id="close-modal" class="close-modal">✕</button>
        <div class="modal-header">
          <p style="color: var(--primary); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.5rem;">Revision Session</p>
          <h2>${problem.name}</h2>
          <p style="color: var(--text-dim); margin-bottom: 2.5rem; font-size: 0.9rem;">${problem.category}</p>
        </div>

        <div class="srs-timeline-container">
          <p class="stat-label" style="text-align: center; margin-bottom: 1.5rem;">Next Milestones</p>
          <div class="srs-timeline" style="display: flex; justify-content: space-between; position: relative; padding: 0 10px;">
            ${steps.map(step => {
    const isCompleted = revisionCount > step.value;
    const isCurrent = revisionCount === step.value;
    return `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; position: relative; z-index: 2;">
                  <div style="width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 2px solid ${isCompleted || isCurrent ? 'var(--primary)' : 'var(--border)'}; background: ${isCurrent ? 'var(--primary)' : 'var(--card-bg)'}; color: ${isCurrent ? 'var(--bg-color)' : isCompleted ? 'var(--primary)' : 'var(--text-dim)'}; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 800;">
                    ${isCompleted ? '✓' : ''}
                  </div>
                  <span style="font-size: 0.65rem; color: ${isCurrent ? 'var(--text-main)' : 'var(--text-dim)'}; font-weight: 600;">${step.label}</span>
                </div>
                `;
  }).join('')}
            <div style="position: absolute; top: 0.75rem; left: 1rem; right: 1rem; height: 1px; background: var(--border); z-index: 1;"></div>
          </div>
        </div>
        
        <div class="recall-tip" style="margin-top: 3rem; background: var(--bg-color); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border);">
          <h4 style="font-size: 0.9rem; margin-bottom: 0.75rem;">Active Recall Guide:</h4>
          <ul style="padding-left: 1.25rem; font-size: 0.85rem; color: var(--text-dim); display: flex; flex-direction: column; gap: 0.4rem;">
            <li>Explain the logic out loud before coding.</li>
            <li>Visualize the data structures involved.</li>
            <li>Double-check edge cases (empty, single element).</li>
          </ul>
        </div>

        <button id="mark-revised" class="primary-btn" style="margin-top: 2rem;">
          Step Completed
        </button>
      </div>
    </div>
  `;
};
