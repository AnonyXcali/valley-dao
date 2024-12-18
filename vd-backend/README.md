# ValleyDAO Assignment | Node.js Custom HTTP Server with TypeScript and CORS Support

A Node.js backend for the ValleyDAO assignment, which provides endpoint that delivers opportunities based data optionally
filtered by title or description based search terms.

---

## Features

- Custom `HttpServer` class for creating HTTP servers.
- CORS (Cross-Origin Resource Sharing) support for API requests.
- Modular route handling.
- Written in TypeScript for type safety and maintainability.
- SOLID and Clean Code Practices.

---

## Tech Stack
	•	Node.js: Runtime environment.
	•	TypeScript: Type-safe JavaScript.
	•	Yarn: Dependency management.

## Folder Structure

```plaintext
 src/
│   ├── application/        # Application logic (use cases, services)
|   |   └──filters/
|   |      └── FilterAggreator.ts (Combining the filters)
|   |      └── IFilter.ts  (Interface for Filters)
|   |      └── TitleFilter.ts (Filtering based on Title and Description)
│   │   └── usecases/
│   │       └── GetOpportunitiesUseCase.ts
│   ├── domain/             # Core business logic (entities, interfaces, contracts)
│   │   ├── entities/
│   │   │   └── Opportunity.ts
│   │   ├── repositories/
│   │   │   └── OpportunitiesRepository.ts
│   │   └── interfaces/
│   │       └── IOpportunitiesRepository.ts
│   ├── infrastructure/     # Frameworks and tools (DB, HTTP, file management)
│   │   ├── db/
│   │   │   └── database.ts
│   │   └── http/
│   │       └── HttpServer.ts
│   ├── presentation/       # API layer (routes, controllers, middlewares)
│   │   ├── controllers/
│   │   │   └── OpportunitiesController.ts
│   │   ├── routes/
│   │   │   └── opportunitiesRoutes.ts
│   ├── config/             # Configuration (constants, environment variables)
│   │   └── AppConfig.ts
│   └── data/               # Static JSON file
│       └── opportunities.json
```

## Steps

1. Clone Repository
  ```bash
  git clone <repository-url>
  cd <repository-folder>
  ```

2. Install Dependencies
  ```bash
  yarn install
  ```

3. Run the Server
  ```bash
  yarn dev
  ```

4. Build the server
  ```bash
  yarn build
  yarn start
  ```