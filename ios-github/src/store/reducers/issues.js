import { SET_ISSUES } from './../actions/actionTypes';

const initialState = {
  issues: [],
  expireDate: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISSUES:
      return {
        ...state,
        issues: action.issues,
        expireDate: action.expireDate
      };
    default:
      return state;
  }
};

export default reducer;
