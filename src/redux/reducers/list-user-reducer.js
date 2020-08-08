import * as actionTypes from '../../constants/actionTypes';
import INITIAL_STATE from '../initialState';

const listUserReducer = (state = INITIAL_STATE, action) => {
    console.log("action,type",action,action.type);
  switch (action.type) {
    case actionTypes.FETCH_USERS_START:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userList: action.payload.results
      };
    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default listUserReducer;
