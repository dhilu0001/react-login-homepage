import * as actionTypes from '../../constants/actionTypes';
import INITIAL_STATE from '../initialState';

const listUserReducer = (state = INITIAL_STATE, action) => {
    console.log("action,type",action,action.type);
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.REGISTER_SUCCESS:
        localStorage.setItem('registeredUser',action.payload);
      return {
        ...state,
        isFetching: false,
        registeredUsers: action.payload
      };
    case actionTypes.REGISTER_FAILURE:
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
