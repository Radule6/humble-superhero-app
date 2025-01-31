# ✅ TODO List: Humble Superhero App

- [ ] Set up GitHub Actions Scheduled Request to keep Render awake:
  - [ ] Create .github/workflows/keep-alive.yml
  - [ ] Add a scheduled curl request to ping the API every 10 minutes

## 🖥️ Frontend (React + Vite) - Deploying to Vercel
### 📌 Setup
- [ ] Create a Vite + React project inside frontend/
- [ ] Install Zustand for state management:
  ```bash
  pnpm add zustand
  ```
- [ ] Install Axios for API requests:
  ```bash
  pnpm add axios

- [ ] Create frontend components:
  - [ ] SuperheroForm.tsx
  - [ ] SuperheroList.tsx
  - [ ] Header.tsx
- [ ] Set up Routing (React Router) if needed
- [ ] Implement API calls:
  - [ ] POST /superheroes (add a new superhero)
  - [ ] GET /superheroes (fetch the list)

### 📌 Vercel Deployment
- [ ] Create a Vercel account and log in
- [ ] Install Vercel CLI:
  ```bash
  npm install -g vercel
  ```
- [ ] Deploy frontend on Vercel:
  ```bash
  cd frontend
  vercel --prod
  ```
- [ ] Verify frontend is running (https://your-frontend.vercel.app)
- [ ] Ensure the frontend correctly fetches data from Render API

## 🔥 Final Steps
- [ ] Test full-stack functionality
- [ ] Optimize frontend UI/UX
- [ ] Add loading states and error handling in the frontend
- [ ] Deploy final version
- [ ] Share the project 🚀

---

### 📌 Summary
- **Backend** → **Render** (free plan, add GitHub Actions to keep alive)
- **Frontend** → **Vercel** (fully optimized for React + Vite)
- **GitHub Actions** keeps the backend awake on Render

This structure ensures **smooth deployment and performance** while keeping costs **free**. Let me know if you need more adjustments! 🚀🔥