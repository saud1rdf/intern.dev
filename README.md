# intern.dev — Starter Project

A minimal full‑stack starter to preview and upload your **intern.dev** project.
It includes:
- **Backend**: Express server serving the tasks JSON at `/api/tasks`
- **Frontend**: Vite + React app that fetches and displays the tasks

## Quick start

### 1) Backend
```bash
cd backend
npm install
npm run dev
```
This starts the server on **http://localhost:3001**. It also serves the JSON at **/api/tasks**.

### 2) Frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```
Vite will print a local URL (often http://localhost:5173). The app fetches from `http://localhost:3001/api/tasks`.

### 3) Build & serve production
```bash
cd frontend
npm run build
# Copy the built files to backend/public
rm -rf ../backend/public
mkdir -p ../backend/public
cp -R dist/* ../backend/public/

# Run backend in production
cd ../backend
npm start
```
Now open **http://localhost:3001** to see the built frontend.

## Deploy anywhere
- Upload the entire folder to your host or push it to GitHub and deploy the backend (Node 18+) + frontend build.
- Make sure the backend has access to `../data/intern_dev_tasks_sources_v3.json` (or set `DATA_PATH` environment variable).

## Customization
- Replace `/data/intern_dev_tasks_sources_v3.json` with your latest dataset.
- Update frontend UI in `frontend/src/App.jsx` as you like.
