const AUTH_DOMAIN = process.env.AUTH_DOMAIN || 'gsheets-db.herokuapp.com';

export const environment = {
  production: true,
  AUTH_SERVER: `https://${AUTH_DOMAIN}`,
  AUTH_DOMAIN
};
