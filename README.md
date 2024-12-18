# ValleyDAO Assignment

![Application Overview](https://drive.google.com/uc?id=192_I0Qy_u-pQLIvZ3JnWPV3WykPWlM_L)

Welcome to the **ValleyDAO Assignment**! This project implements a **SOLID-based Node.js TypeScript backend** and a **modern React TypeScript frontend**. The backend follows a clean architecture, while the frontend adopts modular best practices, leveraging libraries such as Zustand, Styled Components, and React Router.

---

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optional, for running with Docker)

---

## Running Locally

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd valley-dao-assignment
   ```  

2. **Run the Backend**:
  ```bash
  cd vd-backend
  npm install
  npm run build
  npm start
  ```
  The backend will run on http://localhost:3000.

3. **Run the Frontend**:
  ```bash
  cd ../vd-frontend
  npm install
  npm run dev
  ```

  The frontend will run on http://localhost:8080.

3. **Run with Docker**:
  ```bash
  docker-compose up --build
  npm install
  npm run dev
  ```

  The frontend will run on http://localhost:8080.
  The backend will run on http://localhost:3000.

3. **Stop the Docker Containers**:
  ```bash
  docker-compose down
  ```
