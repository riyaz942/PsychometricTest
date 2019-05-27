import answersConstants from "../constants/answersConstants";

const initialState = {
  answers: {}
};

const answersReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case answersConstants.ADD_MOST:
      // TODO check if the correspoding least answers's Id is the same as the payload.data.id
      // If so then then remove the least key
      // and wise versa
      if (
        state.answers[payload.key]
        && state.answers[payload.key].least
        && state.answers[payload.key].least.id === payload.data.id
        ) {
        return {
          ...state,
          answers: {
            ...state.answers,
            [payload.key]: {
              'most': payload.data
            }
          }
        };
      }
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
      if (
        state.answers[payload.key]
        && state.answers[payload.key].most
        && state.answers[payload.key].most.id === payload.data.id
        ) {
        return {
          ...state,
          answers: {
            ...state.answers,
            [payload.key]: {
              'least': payload.data
            }
          }
        };
      }

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
