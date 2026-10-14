# MAKEDA Projection: GitHub + Railway

## Upload
Extract the ZIP. Upload its contents to the root of your GitHub repository, including Dockerfile, package.json, app/, db/, drizzle/, lib/ and public/. Do not upload the ZIP itself or an enclosing folder. Remove the old package ZIP from the repository.

## Railway setup
1. Connect the GitHub repository; keep the root directory empty and remove old custom build/start commands. The root Dockerfile builds the app.
2. Attach one Railway Volume to this service at /data. Keep one replica. The SQLite database is stored on that volume and migrations run automatically.
3. Set Variables: ADMIN_USERNAME=makedauser, ADMIN_PASSWORD=your chosen password, ADMIN_SESSION_SECRET=a random secret of at least 32 bytes. Generate a secret with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))". The previously agreed password can be entered in Railway; credentials are not committed to GitHub.
4. Deploy and generate a public domain. Railway supplies PORT and RAILWAY_PUBLIC_DOMAIN. For a custom domain set APP_URL to its full https:// origin, without a path.
5. Open the public form at / and username/password login at /admin. No ChatGPT login is used.

## Storage and migration
This is a Node.js / Next.js migration of the supplied Cloudflare application. It uses SQLite through Drizzle and better-sqlite3. Existing hosted data is not included or automatically copied. A new database starts empty. Attach the /data volume before collecting leads to preserve data across redeployments. Back up the volume and keep one replica.

## Validation
See VALIDATION.md for the actual checks performed. A successful Railway deployment still requires the volume and variables above.
