import answersConstants from "../constants/answersConstants";

export function addMost(key, data) {
  return function (dispatch) {
    dispatch({
      type: answersConstants.ADD_MOST,
      payload: {
        key,
        data,
      }
    })
  }
}

export function addLeast(key, data) {
  return function (dispatch) {
    dispatch({
      type: answersConstants.ADD_LEAST,
      payload: {
        key,
        data,
      }
    })
  }
}
