import React, { Component, Fragment } from "react";
import Section from "../section/section";
import styles from "./table.module.scss";
import questions from "../../questions.json";
import map from "lodash/map";
import every from 'lodash/every';

import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Snackbar from "@material-ui/core/Snackbar";
// import ErrorIcon from '@material-ui/icons/Error';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { makeStyles } from '@material-ui/core/styles';
import { updateAppState } from "../../actions/appStateActions";
import { appStates } from "../../constants/appStates";

class Table extends Component {
  state = {
    openSnackBar: false
  };

  constructor(props) {
    super(props);

    this.state = {
      keys: Object.keys(questions)
    };
  }

  handleClick = () => {
    const { answersReducer, updateAppState } = this.props;
    let hasError = false;

    const questionsKeys = Object.keys(questions);

    every(questionsKeys, key => {
      if (isEmpty(answersReducer.answers[key])) {
        hasError = true;
        return this.showError();
      } else if (isEmpty(answersReducer.answers[key].most)) {
        hasError = true;
        return this.showError();
      } else if (isEmpty(answersReducer.answers[key].least)) {
        hasError = true;
        return this.showError();
      }
      return true;
    });

    if (!hasError) {
      updateAppState(appStates.SHOW_RESULT);
    }
  };

  showError = () => {
    this.setState({
      openSnackBar: true
    });
    return false;
  };

  handleClose = () => {
    this.setState({
      openSnackBar: false
    });
  };

  render() {
    const { keys } = this.state;
    const { openSnackBar } = this.state;
    const { className } = this.props;
    const classes = makeStyles(theme => ({
      error: {
        backgroundColor: theme.palette.error.dark
      },
      icon: {
        fontSize: 20
      },
      iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1)
      }
    }));

    return (
      <Fragment>
        <div
          style={{
            marginTop: 32
          }}
        >
          Choose one MOST and one LEAST in each of the 28 groups of words.
        </div>
        <div className={styles.table_header_container}>
          {map([0, 1, 2], value =>
            <div className={`${styles.header_part_container} part_${value}`}>
              <div className={styles.header_title_container} />
              <div className={styles.header_value_container}>most/least</div>
            </div>
          )}
        </div>

        <div className={styles.table_container}>
          {map(keys, key => {
            return <Section sectionId={key} sectionData={questions[key]} />;
          })}
        </div>
        <Button
          style={{
            marginBottom: 100
          }}
          onClick={this.handleClick}
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
        <Snackbar
          className={clsx(classes.error, className)}
          aria-describedby="client-snackbar"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={openSnackBar}
          onClose={this.handleClose}
          autoHideDuration={2000}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="client-snackbar" className={classes.message}>
              {/* <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} /> */}
              Please fill all the details
            </span>
          }
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    answersReducer: state.answersReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators(
      {
        updateAppState
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
