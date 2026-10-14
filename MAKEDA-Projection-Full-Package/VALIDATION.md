# Validation

- Dependency installation completed and package-lock.json included.
- Next.js production build and TypeScript checks passed.
- Production server checks passed: public page, admin page, SQLite migrations, unauthenticated admin access rejection, invalid credentials, successful login, lead storage, cross-origin rejection, booking request, lead status update, admin data, CSV export excluding private tokens, and logout cookie clearing.
- Checks used temporary credentials and a separate test database, neither included in this archive.
- Tests ran locally on Node.js 24. Docker targets Node.js 22. The Docker image and deployment in the user's Railway account have not been tested here.
- Railway requires a /data volume, one replica, and the admin environment variables listed in README.md.
