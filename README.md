# Vote

Simple voting web app (static frontend + Python serverless API endpoints).

Structure
- `index.html`, `script.js`, `styles.css` — frontend UI
- `api/` — Python serverless endpoints used by the frontend (Vercel-compatible)

Quick start
- Open `index.html` in a browser to use the static frontend.
- To run the API locally, install Vercel CLI and run `vercel dev` from the project root (requires Python for the `api/` endpoints).

Deployment
- This project is configured for Vercel. Push to GitHub and connect the repo in Vercel, or run `vercel --prod` to deploy.

Notes
- Add a virtual environment and Python dependencies if you run the API locally.
- See `.gitignore` for files ignored by git.

License
- Add a license if you plan to publish this repository publicly.
