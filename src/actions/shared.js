import { getInitialData } from '../utils/api';
import { authenticateUser } from './authedUser';
import { receiveUsers } from './users';
import { receivePolls } from './polls';

const AUTHED_USER = 'sarah_edo';

const handleInitialData = () => {
  return dispatch => {
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(authenticateUser(AUTHED_USER));
    });
  };
};

export { handleInitialData };
