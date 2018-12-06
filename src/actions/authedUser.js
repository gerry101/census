const AUTHED_USER = 'AUTHED_USER';

const authenticateUser = id => {
  return {
    type: AUTHED_USER,
    id,
  };
};

export { AUTHED_USER, authenticateUser };
