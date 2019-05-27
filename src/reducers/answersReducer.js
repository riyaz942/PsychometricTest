import omit from 'lodash/omit';
import answersConstants from "../constants/answersConstants";

const initialState = {
  answers: {}
};

const answersReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
/* ------------------------------------ADD MOST ------------------------------------ */
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

/* ------------------------------------ADD LEAST------------------------------------ */

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
/* ------------------------------------REMOVE MOST------------------------------------ */
    case answersConstants.REMOVE_MOST:

      if (state.answers[payload.key] && state.answers[payload.key].least) {
        // This will remove the most key
        return {
          ...state,
          answers: {
            ...state.answers,
            [payload.key]: {
              'least': state.answers[payload.key].least
            }
          }
        }
      }

      // This will remove the entire section if a lease is not present
      return {
        ...state,
        answers: omit(state.answers, [payload.key])
      }
    /* return {
        ...state,
        answers: {
          ...state.answers,
          [payload.key]: {
          }
        }
      } */
/* ------------------------------------REMOVE LEAST------------------------------------ */
    case answersConstants.REMOVE_LEAST:

      if (state.answers[payload.key] && state.answers[payload.key].most) {
        // This will remove the most key
        return {
          ...state,
          answers: {
            ...state.answers,
            [payload.key]: {
              'most': state.answers[payload.key].most
            }
          }
        }
      }

      // This will remove the entire section if a lease is not present
      return {
        ...state,
        answers: omit(state.answers, [payload.key])
      }
    default:
      return state;
  }
}

export default answersReducer;
