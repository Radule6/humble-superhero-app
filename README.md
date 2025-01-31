# ✅ TODO List: Humble Superhero App

## 📂 Project Setup
- [ ] Create the project root folder: `humble-superhero-app/`
- [ ] Initialize a Git repository: `git init`
- [ ] Add `.gitignore` files for:
  - [ ] Root (`.gitignore`)
  - [ ] Backend (`backend/.gitignore`)
  - [ ] Frontend (`frontend/.gitignore`)
- [ ] Set up `pnpm` workspace (optional)

## 🛠️ Backend (NestJS) - Deploying to Render
### 📌 Setup
- [ ] Generate a NestJS project inside `backend/`
- [ ] Install required dependencies:
  ```bash
  pnpm add @nestjs/platform-express
  ```
- [ ] Set up CORS for frontend connection
- [ ] Create a .env file for environment variables

### 📌 Superhero Feature
- [ ] Generate superheroes module
- [ ] Create Superhero model (in-memory array)
- [ ] Create DTOs for validation:
  - [ ] create-superhero.dto.ts
  - [ ] update-superhero.dto.ts (if needed)
- [ ] Implement Superhero service
- [ ] Implement Superhero controller
  - [ ] POST /superheroes → Add a superhero
  - [ ] GET /superheroes → Get superheroes sorted by humility score

### 📌 Validation & Error Handling
- [ ] Implement ValidationPipe (ensure humility score is between 1-10)
- [ ] Implement Global Exception Filter for error responses

### 📌 Testing
- [ ] Write a Jest test for one endpoint (superheroes.e2e-spec.ts)

### 📌 Render Deployment
- [ ] Create a Render account and log in
- [ ] Create a new Web Service on Render
- [ ] Connect the GitHub repository
- [ ] Set build command:
  ```bash
  pnpm install && pnpm run build
  ```
- [ ] Set start command:
  ```bash
  pnpm run start:prod
  ```
- [ ] Add Environment Variables:
  - PORT=10000 (or any available port)
- [ ] Deploy backend on Render
- [ ] Verify API is running (https://your-backend.onrender.com/superheroes)
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
  ```
- [ ] Configure API base URL to use the Render backend:
  ```typescript
  const API_URL = "https://your-backend.onrender.com";
  ```
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