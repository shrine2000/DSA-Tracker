import './styles/index.css';
import problemsData from './data/problems.json';
import { renderDashboard } from './components/Dashboard';
import { renderProblemList } from './components/ProblemList';
import { renderRevisionModal } from './components/RevisionModal';
import { markProblemAsDone, reviseProblem, getTrackerState } from './stores/tracker';

const app = document.querySelector<HTMLDivElement>('#app')!;
let currentFilter = 'all';

const render = () => {
    app.innerHTML = `
    <header>
      <div class="title-group">
        <h1>NeetCode 150 <span>Tracker</span></h1>
        <p>Scientific Revision & Spaced Repetition</p>
      </div>
      <div id="dashboard-container" style="flex: 1; min-width: 300px;">
        ${renderDashboard(problemsData.length)}
      </div>
    </header>
    
    <main id="main-content">
      ${renderProblemList(problemsData, currentFilter)}
    </main>
    <div id="modal-container"></div>
  `;

    attachEventListeners();
};

const attachEventListeners = () => {
    // Filter clicks
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentFilter = (e.currentTarget as HTMLButtonElement).dataset.filter!;
            render();
        });
    });

    // Mark as done / Revision clicks
    document.querySelectorAll('.mark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt((e.currentTarget as HTMLButtonElement).dataset.id!);
            markProblemAsDone(id);
            render();
        });
    });

    // Random unsolved problem
    document.querySelector('#random-unsolved')?.addEventListener('click', () => {
        const state = getTrackerState();
        const unsolved = problemsData.filter(p => !state[p.id]);
        if (unsolved.length > 0) {
            const randomProblem = unsolved[Math.floor(Math.random() * unsolved.length)];
            showRevisionModal(randomProblem);
        } else {
            alert('Congratulations! You have solved all problems in this list. 🎉');
        }
    });

    // Problem card clicks (Revision Modal)
    document.querySelectorAll('[data-problem-id]').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt((card as HTMLDivElement).dataset.problemId!);
            const problem = problemsData.find(p => p.id === id);
            if (problem) showRevisionModal(problem);
        });
    });
};

const showRevisionModal = (problem: any) => {
    const state = getTrackerState();
    const revisionCount = state[problem.id]?.revisionCount || 0;

    const modalContainer = document.querySelector('#modal-container')!;
    modalContainer.innerHTML = renderRevisionModal(problem, revisionCount);

    document.querySelector('#close-modal')?.addEventListener('click', () => {
        modalContainer.innerHTML = '';
    });

    document.querySelector('#mark-revised')?.addEventListener('click', () => {
        if (state[problem.id]) {
            reviseProblem(problem.id);
        } else {
            markProblemAsDone(problem.id);
        }
        modalContainer.innerHTML = '';
        render();
    });

    document.querySelector('#modal-overlay')?.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).id === 'modal-overlay') {
            modalContainer.innerHTML = '';
        }
    });
};

render();
