# Harmony Quiz Game (Universal Human Values)

A student-friendly interactive quiz website that teaches harmony in society and nature.

## Features

- Landing page with student details input
- 15 meaningful quiz questions about harmony, relationships, and the environment
- Countdown timer for each question
- Scoring based on positive choices and speed
- Feedback after each answer
- Result page with performance badge
- Leaderboard and shared admin view when run with the backend
- Data stored centrally by the Node.js server, with localStorage fallback
- Mobile responsive and polished UI

## Files

- `index.html` — Main page structure
- `styles.css` — Visual design and responsive layout
- `script.js` — Quiz logic and local storage handling

## How to run locally

1. Open the folder `Harmony Quiz Game` in your code editor.
2. Install dependencies by running `npm install`.
3. Use the VS Code terminal task:
   - Open the Command Palette (`Ctrl+Shift+P`)
   - Run `Tasks: Run Task`
   - Select `Start Harmony Quiz Backend`
4. Open your browser and go to `http://localhost:3000`
5. Fill in your name, ID, and section, then click **Start Quiz**.
6. Answer each question before the timer ends.
7. Check the result screen, leaderboard, and admin view.

> The app now uses a simple Node.js backend to save shared leaderboard and admin data across visitors. If the backend is unavailable, the app falls back to `localStorage`.

## Notes

- Use the **Admin View** button to check top scorers and participant details.
- Restart the quiz from the result page at any time.

## Deploying to the web

This app is ready for cloud deployment. It includes:

- `Procfile` for Node.js hosts like Heroku
- `Dockerfile` for Docker-compatible services
- `render.yaml` for Render deployment

### Recommended flow

1. Push the repository to GitHub.
2. Connect the repo to Render, Heroku, Railway, or another Node host.
3. Use the default start command: `npm start`.
4. The app will listen on the host-provided port automatically.

### Quick Render setup

- Create a new web service.
- Select the GitHub repository.
- Use branch `main`.
- Build command: `npm install`
- Start command: `npm start`
- Environment: `node`
