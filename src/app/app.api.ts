let apiAddress: any;

/**
 * Production
 */
apiAddress = {
  api: 'http://localhost:3000',
};

/**
 * Development
 */
if (window.location.hostname == 'localhost') {
  apiAddress = {
    api: 'http://localhost:3000',
  };
}

/**
 * Export
 */
export const API = apiAddress.api;
