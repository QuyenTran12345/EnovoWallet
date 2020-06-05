const USER_ROLE = {
    ADMIN: 1,
    USER: 2
  };
  
  const SALT_ROUNDS = 10;
  const JWT_SECRET = 'codebase';
  
  module.exports = {
    USER_ROLE,
    SALT_ROUNDS,
    JWT_SECRET
  };
  