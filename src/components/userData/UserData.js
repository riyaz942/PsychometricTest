import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextInput } from "react-materialize";
import TextField from '@material-ui/core/TextField';
import isEmpty from 'lodash/isEmpty';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateAppState, updateUserInfo } from "../../actions/appStateActions";
import { appStates } from "../../constants/appStates";
// import { appStates } from "../../constants/appStates";

class UserData extends Component {
  state = {
    name: '',
    recruiterName: ''
  }

  onChangeRecruiterName = (event) => {
    this.setState({
      recruiterName: event.target.value,
    })
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  onSubmit = event => {
    event.preventDefault();

    const { updateUserInfo, updateAppState } = this.props;
    const {
      recruiterName,
      name
    } = this.state;

    if(isEmpty(recruiterName) || isEmpty(name))  {
      alert('Please fill all the details');
    } else {
      updateUserInfo(this.state);
      updateAppState(appStates.GET_TEST_DATA);  
    }    
  };

  render() {
    const {recruiterName, name} = this.state;

    return (
      <form onSubmit={this.onSubmit}>

        <TextInput 
          id="name"
          placeHolder="Name"
          value={name}
          onChange={this.onChangeName}
        />
        
        <TextInput 
          id="recruiter_name"
          placeHolder="Recruiter Name"
          value={recruiterName}
          onChange={this.onChangeRecruiterName}
        />

        {/* <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          margin="normal"
        /> */}
        <Button
          type="submit"
          style={{
            marginBottom: 100
          }}
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators(
      {
        updateAppState,
        updateUserInfo
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
