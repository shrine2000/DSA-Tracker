import './styles/index.css';
import problemsData from './data/problems.json';
import { renderDashboard } from './components/Dashboard';
import { renderProblemList } from './components/ProblemList';
import { renderAddProblemForm } from './components/AddProblemForm';
import { renderRevisionModal } from './components/RevisionModal';
import { markProblemAsDone, reviseProblem, getTrackerState, getCustomProblems, addCustomProblem, Problem } from './stores/tracker';

const app = document.querySelector<HTMLDivElement>('#app')!;
let currentFilter = 'all';

const getAllProblems = (): Problem[] => {
    return [...(problemsData as Problem[]), ...getCustomProblems()];
};

const initTheme = () => {
    const savedTheme = localStorage.getItem('dsa-tracker-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('dsa-tracker-theme', newTheme);
};

const render = () => {
    const allProblems = getAllProblems();
    const categories = Array.from(new Set(allProblems.map(p => p.category))).sort();
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    app.innerHTML = `
    <header>
      <div class="title-group">
        <h1>DSA Tracker</h1>
        <p>Minimalist Revision System</p>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <button id="open-drawer" class="filter-btn" style="background: var(--text-main); color: var(--bg-color); border: none; font-weight: 700;">Add problem</button>
        <button class="theme-toggle" id="theme-toggle" title="Toggle Theme">
          ${isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
    
    <main id="main-content">
      ${renderDashboard(allProblems)}
      ${renderProblemList(allProblems, currentFilter)}
    </main>

    <div id="drawer-overlay" class="drawer-overlay">
        <div class="drawer-content">
            <button id="close-drawer" class="drawer-close">✕</button>
            <div class="drawer-header">
                <h2>Add Problem</h2>
                <p style="color: var(--text-dim); font-size: 0.85rem; margin-top: 0.25rem;">Expand your collection</p>
            </div>
            ${renderAddProblemForm(categories)}
        </div>
    </div>

    <div id="modal-container"></div>
  `;

    attachEventListeners();
};

const attachEventListeners = () => {
    // Drawer
    const drawer = document.querySelector('#drawer-overlay') as HTMLElement;
    document.querySelector('#open-drawer')?.addEventListener('click', () => {
        drawer.classList.add('open');
    });
    document.querySelector('#close-drawer')?.addEventListener('click', () => {
        drawer.classList.remove('open');
    });
    drawer?.addEventListener('click', (e) => {
        if (e.target === drawer) drawer.classList.remove('open');
    });

    // Theme toggle
    document.querySelector('#theme-toggle')?.addEventListener('click', () => {
        toggleTheme();
        render();
    });

    // Filter clicks
    document.querySelectorAll('.filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = (e.currentTarget as HTMLButtonElement).dataset.filter;
            if (filter) {
                currentFilter = filter;
                render();
            }
        });
    });

    // Mark as done / Revision clicks
    document.querySelectorAll('.mark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const idStr = (e.currentTarget as HTMLButtonElement).dataset.id;
            if (idStr) {
                const id = parseInt(idStr);
                markProblemAsDone(id);
                render();
            }
        });
    });

    // Add custom problem
    document.querySelector('#add-custom-problem-btn')?.addEventListener('click', () => {
        const linkInput = document.querySelector('#custom-problem-link') as HTMLInputElement;
        const topicSelect = document.querySelector('#custom-problem-topic') as HTMLSelectElement;
        const difficultySelect = document.querySelector('#custom-problem-difficulty') as HTMLSelectElement;

        if (!linkInput.value || !topicSelect.value) {
            alert('Please provide both a link and a topic.');
            return;
        }

        // Extract name from URL: leetcode.com/problems/NAME/ -> NAME
        let name = 'Custom Problem';
        try {
            const url = new URL(linkInput.value);
            const pathParts = url.pathname.split('/').filter(p => !!p);
            if (pathParts[0] === 'problems' && pathParts[1]) {
                name = pathParts[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            } else if (pathParts[0]) {
                name = pathParts[0].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            }
        } catch (e) {
            // Keep default name
        }

        addCustomProblem(name, linkInput.value, topicSelect.value, difficultySelect.value);
        render();
    });

    // Random unsolved problem
    document.querySelector('#random-unsolved')?.addEventListener('click', () => {
        const allProblems = getAllProblems();
        const state = getTrackerState();
        const unsolved = allProblems.filter(p => !state[p.id]);

        if (unsolved.length > 0) {
            const randomProblem = unsolved[Math.floor(Math.random() * unsolved.length)];
            showRevisionModal(randomProblem);
        } else {
            alert('Congratulations! You have solved all problems. 🎉');
        }
    });

    // Problem card clicks (Revision Modal)
    document.querySelectorAll('[data-problem-id]').forEach(card => {
        card.addEventListener('click', () => {
            const idStr = (card as HTMLDivElement).dataset.problemId;
            if (idStr) {
                const id = parseInt(idStr);
                const allProblems = getAllProblems();
                const problem = allProblems.find(p => p.id === id);
                if (problem) showRevisionModal(problem);
            }
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

initTheme();
render();
