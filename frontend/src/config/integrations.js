export const INTEGRATIONS = {
  tidio: {
    scriptSrc: import.meta.env.VITE_TIDIO_SCRIPT_SRC ?? '',
  },
  userway: {
    scriptSrc: 'https://cdn.userway.org/widget.js',
    accountId: import.meta.env.VITE_USERWAY_ACCOUNT_ID ?? '',
  },
  accessibe: {
    scriptSrc: 'https://widget.accessibe.com/accessibe_widget.js',
    accountId: import.meta.env.VITE_ACCESSIBE_ACCOUNT_ID ?? '',
  },
};


