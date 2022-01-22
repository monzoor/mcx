export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const API_ERRORS = {
  BLANK: 'blank',
  SESSION_EXPIRED: 'Signature has expired',
  INVALID_EMAIL_PASSWORD: 'invalid_email_or_password',
  UNCONFIRMED_USER: 'user_unconfirmed',
  REVOKED: 'revoked token',
  DELETED: 'deleted',
  SUSPENDED: 'suspended',
  DISEASE_MISMATCH: 'disease_mismatch',
  ANSWERED: 'answered_already',
  LOCKED: 'locked',
};

export const LS_KEYS = {
  AUTH: 'auth',
  AUTH_TOKEN: 'auth_token',
};
