import answersConstants from "../constants/answersConstants";

const initialState = {
  answers: {}
};

const answersReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case answersConstants.ADD_MOST:
    // TODO check if the correspoding least data's Id is the same as the payload.data.id
    // If so then then remove the least key
    // and wise versa
      return {
        ...state,
        answers: {
          ...state.answers,
          [payload.key]: {
            ...state.answers[payload.key],
            'most': payload.data
          }
        }
      }
    case answersConstants.ADD_LEAST:
    return {
      ...state,
      answers: {
        ...state.answers,
        [payload.key]: {
          ...state.answers[payload.key],
          'least': payload.data
        }
      }
    }
  default:
      return state;
  }
}

export default answersReducer;
