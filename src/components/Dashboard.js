import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {
    panelOnAnswered: true,
  };

  togglePanel = () => {
    this.setState(prevState => ({
      panelOnAnswered: !prevState.panelOnAnswered,
    }));
  };

  render() {
    const { panelOnAnswered } = this.state;
    const { answered, unanswared } = this.props;

    const dashboardList = panelOnAnswered ? answered : unanswared;

    return (
      <div>
        <div className="dashboard-toggle">
          <button
            style={{ textDecoration: panelOnAnswered ? 'underline' : 'none' }}
            onClick={this.togglePanel}
          >
            Answered
          </button>
          <span>|</span>
          <button
            style={{ textDecoration: panelOnAnswered ? 'none' : 'underline' }}
            onClick={this.togglePanel}
          >
            Unanswared
          </button>
        </div>
        <ul className="dashboard-list">
          {dashboardList.map(poll => {
            return <li key={poll.id}>{poll.question}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, polls }) => {
  const answers = users[authedUser].answers;

  const answered = answers
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswared = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answered,
    unanswared,
  };
};

export default connect(mapStateToProps)(Dashboard);
