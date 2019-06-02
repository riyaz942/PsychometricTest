import React, {Component} from 'react';
import styles from './app.module.scss';
import Table from './components/table/table';
import { connect } from 'react-redux';
import Result from './components/result/Result';
import { appStates } from './constants/appStates';
import UserData from './components/userData/UserData';

class App extends Component {

  render() {
    const { appStateReducer: {appState} } = this.props;
  
    return (
      <div className={styles.app}>
        <div className={styles.app_container}>
          {appState === appStates.GET_USER_DATA && <UserData />}
          {appState === appStates.GET_TEST_DATA && <Table />}
          {appState === appStates.SHOW_RESULT && <Result />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    answersReducer: state.answersReducer,
    appStateReducer: state.appStateReducer,
  };
}

export default connect(mapStateToProps, null)(App);
