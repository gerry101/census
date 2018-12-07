import { savePoll } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

const RECEIVE_POLLS = 'RECEIVE_POLLS';
const ADD_POLL = 'ADD_POLL';

const receivePolls = polls => {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
};

const addPoll = poll => {
  return {
    type: ADD_POLL,
    poll,
  };
};

const handleAddPoll = poll => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    savePoll({
      ...poll,
      author: authedUser,
    })
      .then(poll => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
};

export { RECEIVE_POLLS, ADD_POLL, receivePolls, handleAddPoll };
