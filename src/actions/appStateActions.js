export function updateAppState(state) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_APP_STATE',
      payload: state
    })
  }
}

export function updateUserInfo (value) {
  return function (dispatch) {
    dispatch({
      type: 'UPDATE_USER_INFO',
      payload: value
    })
  }
}