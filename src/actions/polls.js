const RECEIVE_POLLS = 'RECEIVE_POLLS';

const receivePolls = polls => {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
};

export { RECEIVE_POLLS, receivePolls };
