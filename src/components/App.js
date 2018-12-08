import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';
import Poll from './Poll';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        <LoadingBar />
        {!loading && (
          <Poll match={{ params: { id: 'loxhs1bqm25b708cmbf3g' } }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
