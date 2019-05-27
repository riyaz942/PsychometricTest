import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import styles from './app.module.scss';
import Table from './components/table/table';
import Snackbar from '@material-ui/core/Snackbar';

class App extends Component {
  state ={
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

    return (
      <div className={styles.app}>
        <div className={styles.app_container}>
          <Table />
          <Button onClick={this.handleClick}>Open simple snackbar</Button>
          <Snackbar
            variant="error"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={openSnackBar}
            onClose={this.handleClose}
            autoHideDuration={6000}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Note archived</span>}
          />
        </div>
      </div>
    );  
  }
}

export default App;
