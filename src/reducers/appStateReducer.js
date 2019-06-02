import {appStates} from "../constants/appStates";

const initialState = {
  appState: appStates.GET_USER_DATA,
  userInfo: {
    name: '',
    recruiterName: '',
  },
};

const answersReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'UPDATE_APP_STATE':
      return {
        ...state,
        appState: payload
      }
    case 'UPDATE_USER_INFO': 
      return {
        ...state,
        userInfo: action.payload
      }
    default:
      return state;
  }
}

export default answersReducer;
