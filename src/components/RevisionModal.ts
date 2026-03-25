interface Problem {
    id: number;
    name: string;
    category: string;
}

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
      <div class="glass-card modal-content animate-in">
        <button id="close-modal" class="close-modal">✕</button>
        <div class="modal-header">
          <span>Active Recall Mode</span>
          <h2>${problem.name}</h2>
          <p style="color: var(--text-dim); margin-bottom: 2rem;">${problem.category}</p>
        </div>

        <div class="srs-timeline-container">
          <p class="stat-label" style="text-align: center; margin-bottom: 1rem;">Revision Schedule</p>
          <div class="srs-timeline">
            ${steps.map(step => {
        const isCompleted = revisionCount > step.value;
        const isCurrent = revisionCount === step.value;
        return `
                <div class="srs-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
                  ${isCompleted ? '✓' : step.value}
                  <div class="srs-label">${step.label}</div>
                </div>
              `;
    }).join('')}
          </div>
        </div>
        
        <div class="recall-tip" style="margin-top: 3rem;">
          <h4>Scientifically Proven Revision Tips:</h4>
          <ul>
            <li>Don't look at the solution immediately.</li>
            <li>Try to write down the approach first.</li>
            <li>Recall time & space complexity.</li>
          </ul>
        </div>

        <button id="mark-revised" class="primary-btn">
          I've Revised This
        </button>
      </div>
    </div>
  `;
};
