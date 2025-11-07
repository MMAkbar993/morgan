## Submission Service

This Express service processes case-evaluation submissions from the frontend. It sends an email notification to the site owner and attempts to enrich the payload with a location guess derived from the submitter's IP address.

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `ENV_TEMPLATE.md` to `.env` and fill in the values:
   ```bash
   cp ENV_TEMPLATE.md .env
   ```
   Required values:
   - `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`, `EMAIL_USER`, `EMAIL_PASS`: SMTP credentials (e.g. SendGrid, Postmark, Gmail via App Password).
   - `EMAIL_TO`: Where the submission email is delivered.
   - Optional `IPINFO_TOKEN`: enables higher-fidelity IP lookups. Without it we fall back to the public ipapi.co endpoint.

3. Start the service:
   ```bash
   npm run dev
   ```
   The server listens on `PORT` (defaults to `5000`).

### API

- `POST /api/submissions`
  ```json
  {
    "firstName": "Ashley",
    "lastName": "Winstead",
    "email": "ashley@example.com",
    "phone": "555-0100",
    "zipCode": "32801",
    "caseType": "car-accident",
    "description": "Brief description",
    "consent": true,
    "locale": "en",
    "ip": "203.0.113.1" // optional override from the client
  }
  ```
  Responds with `{ "message": "Submission received", "location": { ... } }`.

- `GET /api/status` returns `{ "status": "ok" }` for health checks.

### Deployment Notes

- Configure CORS via `CORS_ORIGIN` if the frontend runs on a different domain.
- Use a transactional email provider in production; the service will throw if `EMAIL_TO` is missing.
- Remember to add environment variables to your hosting platform (e.g. Vercel, Render, Railway).

