# Morgan & Morgan Marketing SPA

React (Vite) single-page app wired for i18n, live chat, accessibility tooling, and backend submissions.

## Environment Variables

Create a `.env` file in `frontend/` with:

```
VITE_BACKEND_URL=http://localhost:5000
# Optional widgets
VITE_TIDIO_SCRIPT_SRC= // embed code from Tidio, e.g. https://code.tidio.co/abc.js
VITE_USERWAY_ACCOUNT_ID= // userway account id
```

## Development

```bash
npm install
npm run dev
```

The SPA expects the submission service to be reachable at `VITE_BACKEND_URL`.
