import { getInitialData } from '../utils/api';
import { authenticateUser } from './authedUser';
import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_USER = 'sarah_edo';

const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(authenticateUser(AUTHED_USER));
      dispatch(hideLoading());
    });
  };
};

export { handleInitialData };
