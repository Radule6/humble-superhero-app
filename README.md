# 🦸 Humble Superhero API

## 🚀 Project Overview

The Humble Superhero API is a simple REST API designed to celebrate team members' unique superpowers while emphasizing humility. It allows users to:

- Add a superhero with a name, superpower, and humility score.
- Fetch the list of superheroes, sorted by humility score in descending order.

## 📌 Features

- ✅ NestJS Backend with in-memory storage
- ✅ Two API Endpoints: POST /superheroes, GET /superheroes
- ✅ Validation: Ensures humility score is between 1-10
- ✅ Frontend React app to add and view superheroes
- ✅ Unit Test: Jest test for one endpoint
- ✅ Deployed on Render (Backend) & Vercel (Frontend)

- Backend URL: https://humble-superhero-app.onrender.com/api/v1/
- Frontend URL: https://humble-superhero-app.vercel.app/

## 🛠️ Tech Stack

### Backend:
- NestJS

### Frontend:
- React + Vite
- State Management: Zustand
- Styling: Styled Components

### Deployment:
- Backend → Render (server)
- Frontend → Vercel (static hosting)

### Testing:
- Jest (for backend API validation)

### CI/CD:
- GitHub Actions for keep alive signal to the free tier of Render
- Vercel (for frontend deployment)

### Installation:
- Clone the repository
- Run `npm install` in both the backend and frontend directories
- Run `npm run dev` in the backend directory to start the server
- Create a .env file in the frontend directory with the following variables:
  - VITE_API_URL=https://humble-superhero-app.onrender.com/api/v1/ or https://localhost:3000/api/v1/
- Run `npm run dev` in the frontend directory to start the frontend
- Enjoy!


## 📁 Project Structure
```json
📦 humble-superhero-app
 ┣ 📂 backend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 superheroes
 ┃ ┃ ┃ ┣ 📂 __tests__
 ┃ ┃ ┃ ┃ ┣ 📜 superheroes.controller.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜 superheroes.service.spec.ts
 ┃ ┃ ┃ ┣ 📂 dto
 ┃ ┃ ┃ ┃ ┗ 📜 create-superhero.dto.ts
 ┃ ┃ ┃ ┣ 📜 superheroes.controller.ts
 ┃ ┃ ┃ ┣ 📜 superheroes.module.ts
 ┃ ┃ ┃ ┗ 📜 superheroes.service.ts
 ┃ ┃ ┗ 📜 main.ts
 ┃ ┣ 📜 .eslintrc.js
 ┃ ┣ 📜 nest-cli.json
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 tsconfig.json
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 app
 ┃ ┃ ┃ ┣ 📂 styles
 ┃ ┃ ┃ ┃ ┗ 📜 AppStyles.ts
 ┃ ┃ ┃ ┗ 📜 App.tsx
 ┃ ┃ ┣ 📂 assets
 ┃ ┃ ┃ ┗ 📜 index.css
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📂 Navbar
 ┃ ┃ ┃ ┃ ┣ 📂 styles
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 NavbarStyles.ts
 ┃ ┃ ┃ ┃ ┗ 📜 Navbar.tsx
 ┃ ┃ ┃ ┣ 📂 SuperHeroForm
 ┃ ┃ ┃ ┃ ┣ 📂 styles
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 SuperHeroFormStyles.ts
 ┃ ┃ ┃ ┃ ┗ 📜 SuperHeroForm.tsx
 ┃ ┃ ┃ ┣ 📂 SuperHeroList
 ┃ ┃ ┃ ┃ ┣ 📂 styles
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 SuperHeroListStyles.ts
 ┃ ┃ ┃ ┃ ┗ 📜 SuperHeroList.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 stores
 ┃ ┃ ┃ ┣ 📜 useDarkModeStore.tsx
 ┃ ┃ ┃ ┗ 📜 useSuperHeroStore.tsx
 ┃ ┃ ┗ 📜 main.tsx
 ┃ ┣ 📜 .eslintrc.js
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 tsconfig.json
 ┣ 📂 .github
 ┃ ┗ 📂 workflows
 ┃   ┗ 📜 keep-alive.yml
 ┗ 📜 README.md
```

## API Endpoints:

1. POST /superheroes
- Request Body:
  ```json
  {
    "name": "Captain Kindness",
    "superpower": "Inspiring others", 
    "humilityScore": 9
  }
  ```
- Response Body:
  ```json
  {
    "id": 1,
    "name": "Captain Kindness",
    "superpower": "Inspiring others",
    "humilityScore": 9
  }
  ```

 2. GET /superheroes
  - Response Body:
  ```json
  [
    {
      "id": 1,
      "name": "Captain Kindness",
      "superpower": "Inspiring others",
      "humilityScore": 9
    }
  ]
  ```


## Collaboration Note
- Use branches for each feature or bug fix
- Open a PR for review
- Would discuss the code before implementation major changes
- Document API changes clearly 
- Pair programming could be one of the ways to collaborate
- Communication would be key to success, to separate the work and to make sure everyone is on the same page


## If I had more time
- I would have added more endpoints to the API, like updating and deleting a superhero, superhero search, superhere profile, etc.
- I would have added more tests to the API, like unit tests for the backend and integration tests for the frontend.
- Implement a real database, like PostgreSQL, MongoDB, etc.
- Implement authentication and authorization
- Implement error handling and validation
- Implement logging
- Implement a CI/CD pipeline
- Implement a monitoring and observability
- Implement a logging and monitoring system
- I would have created a more robust frontend, with more features, like superhero search, superhero profile, etc.
- Superhero photo upload feature, or generate a superhero photo
- I would have potentially created a real time chat feature, like a chat room for superheroes to discuss their superpowers and humility.
- Redis caching could be implemented to improve the performance of the API.
