# AGENTS.md

A professional, spaced-repetition tracker for DSA problems, featuring a high-impact "Geist" interface and automated revision scheduling.

## Project Context
- **Tech Stack:** Vite, TypeScript, Vanilla CSS, [Geist Font Family](https://vercel.com/font).
- **Design System:** Vercel-inspired "Geist" layout (pure black, high contrast, bold typography).
- **Architecture:** 
  - **State:** Persistent `localStorage` for problems, SRS scheduling, and daily streaks.
  - **UI:** Client-side string-template components with integrated navigation drawer and revision modals.
- **Key Features:** Custom problem addition (via drawer), topic/difficulty selection, SRS-based revision, and daily streak tracking.

## Phase 3: Technical Accomplishments
- [x] Full Vercel Dark/Light redesign with Geist Pixel integration.
- [x] Navigation Drawer architecture for adding problems.
- [x] Spaced Repetition (SRS) interval refinement (+1d, +3d, +7d, +14d, +30d).
- [x] Automated daily streak tracking and motivational banner.

## Progressive Disclosure
For specialized tasks, refer to the following guides:
- [Documentation & Technical Writing](docs/agents/docs.md)
- [Testing & Quality Assurance](docs/agents/testing.md)
- [UI/UX & Aesthetics](docs/agents/style.md)
- [Core Logic & SRS Algorithms](docs/agents/logic.md)
