const defaultBaseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const API_ROUTES = {
  submissions: `${defaultBaseUrl.replace(/\/$/, '')}/api/submissions`,
  status: `${defaultBaseUrl.replace(/\/$/, '')}/api/status`,
};

