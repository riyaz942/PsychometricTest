import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import styles from './app.module.scss';
import Table from './components/table/table';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
// import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/core/styles';

class App extends Component {
  state = {
    openSnackBar: false,
  }

  handleClick = () => {
    this.setState({
      openSnackBar: true
    })
  }

  handleClose = () => {
    this.setState({
      openSnackBar: false,
    })
  }

  render() {
    const {openSnackBar} = this.state;
    const { className } = this.props;
    const classes = makeStyles(theme => ({
      error: {
        backgroundColor: theme.palette.error.dark,
      },
      icon: {
        fontSize: 20,
      },
      iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
      },
    }));
  
    return (
      <div className={styles.app}>
        <div className={styles.app_container}>
          <Table />
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
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={openSnackBar}
            onClose={this.handleClose}
            autoHideDuration={2000}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={
              <span id="client-snackbar" className={classes.message}>
                {/* <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} /> */}
                Please fill all the details
              </span>
            }
          />
        </div>
      </div>
    );  
  }
}

export default App;
