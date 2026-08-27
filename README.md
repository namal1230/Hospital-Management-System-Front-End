# Hospital Management System — Frontend

url: https://hospital-management-system-front-end-608537404815.asia-south1.run.app/

This repository contains the Angular frontend for the Hospital Management System (SPMSystemFrontEnd).

A responsive single-page application built with Angular for managing patients, appointments, doctors, departments, billing, and reports.

## Key features

- User authentication (login / role-based access)
- Patient management (create, view, update, search)
- Appointment scheduling and calendar view
- Doctor and department management
- Basic billing and invoice views
- Dashboard and reports
- Responsive UI (desktop & mobile)

## Tech stack

- Angular CLI (v15.x)
- TypeScript
- HTML / SCSS
- Angular Material / Bootstrap (if used)

## Prerequisites

- Node.js (recommended v16+)
- npm (comes with Node) or yarn
- Angular CLI (optional, for local dev): `npm install -g @angular/cli`

## Getting started (development)

1. Clone the repo

   git clone https://github.com/namal1230/Hospital-Management-System-Front-End.git
   cd Hospital-Management-System-Front-End

2. Install dependencies

   npm install

3. Configure environment

The app expects a backend API. Edit `src/environments/environment.ts` and `src/environments/environment.prod.ts` to set the API endpoint used by the app, for example:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

If your backend runs on a different port or host, update `apiUrl` accordingly. Alternatively you can add a proxy configuration (see below).

4. Run a development server

   npm start

This usually runs `ng serve`. Open http://localhost:4200/ in your browser — the app will reload on file changes.

## Proxy configuration (optional)

If your backend is on a different origin and you want to avoid CORS during development, add a `proxy.conf.json` at the repo root:

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}
```

Then run:

   ng serve --proxy-config proxy.conf.json

Adjust `target` to match your backend.

## Build

Build the project for production:

   npm run build

(or `ng build --configuration production`)

The build artifacts are stored in the `dist/` directory.

## Tests

- Unit tests (Karma + Jasmine):

   npm test

- End-to-end tests (optional):

   npm run e2e

You may need to add an e2e test runner (Protractor, Cypress) if not already configured.

## Linting

Run the linter (if configured):

   npm run lint

## Environment & Configuration notes

- Keep secrets out of repository. Store API keys and secrets in environment variables or a secrets manager.
- If you need different behavior per environment, use `environment.ts` / `environment.prod.ts`.

## Folder structure (typical)

- src/app — application source
- src/app/components — UI components
- src/app/services — API and business logic
- src/environments — environment configs
- assets — images and static assets

Adjust the structure to match your implementation.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description of changes

Please add tests for new features and follow existing code style.

## Troubleshooting

- If you see build errors about TypeScript versions or Angular compatibility, make sure your Node and npm versions match the Angular requirements (Angular v15 works well with Node 16.x+).
- If API requests fail in development, verify `apiUrl` and proxy settings.

## License

Specify a license for the project (e.g., MIT) or add one as needed. Example:

MIT © Your Name

## Contact

For questions, open an issue or contact the maintainer.
