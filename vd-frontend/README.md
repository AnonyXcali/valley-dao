# VD-Frontend

![Application Overview](https://drive.google.com/uc?id=192_I0Qy_u-pQLIvZ3JnWPV3WykPWlM_L)

This project is a **React + Vite + TypeScript** frontend application that displays a list of opportunities fetched from a Node.js backend API. The opportunities data is provided by vd-backend service.

## Features

- **React + Vite**: Modern frontend setup with blazing-fast development and build processes.
- **TypeScript**: Strong typing for enhanced developer experience and maintainability.
- **Redux Toolkit**: State management with simplified setup, including:
  - RTK Query for API integration.
  - Pagination logic for managing paginated opportunities.
- **Styled-Components**: For styling React components.
- **Zustand**: Lightweight state management for transient states.
- **React Router**: For navigation between routes.
- **Debounced Search**: Efficient API calls using debouncing logic for improved performance.
- **Runs on Port 8080**: The development server runs by default on port `8080`.

## Dependencies

The application uses the following libraries:

### **Core Dependencies**
- **React**: UI library.
- **Redux Toolkit**: State management.
- **React Router**: Routing.
- **Styled-Components**: Styling.
- **Zustand**: Lightweight state management.
- **Axios**: API requests.

### **Dev Dependencies**
- **Vite**: Fast bundler and development server.
- **TypeScript**: Strongly typed JavaScript.
- **ESLint**: For linting and maintaining code quality.

Refer to the `package.json` for the complete list of dependencies.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vd-frontend
   ```
2. Install Dependencies
  ```bash
  yarn install
  ```

3. Start Development Server
  ```bash
  yarn dev
  ```

4. Scripts
	•	yarn dev: Starts the development server.
	•	yarn build: Builds the project for production.
	•	yarn preview: Previews the production build.
	•	yarn lint: Lints the codebase.

5. API Integration
  ```plaintext
  GET /opportunities?search=<search-text>
  ```

6. Features
  • Opportunities are displayed with pagination.
	•	A debounced search input prevents excessive API calls.
	•	Paginated values are calculated on the client-side.