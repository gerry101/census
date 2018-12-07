import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id} className="user">
            <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />

            <div>
              <p>{user.name}</p>
              <p>{user.polls} Polls</p>
              <p>{user.answers} Answers</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users)
      .map(id => {
        const { name, avatarURL, polls, answers } = users[id];

        return {
          id,
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length,
        };
      })
      .sort((a, b) => b.polls + b.answers > a.polls + a.answers),
  };
};

export default connect(mapStateToProps)(Leaderboard);
