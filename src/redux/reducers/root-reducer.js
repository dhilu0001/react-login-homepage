import { combineReducers } from 'redux';

// import userReducer from './user-reducer';
import listUserReducer from './list-user-reducer';

const rootReducer = combineReducers({
  user: listUserReducer,
  // listUser: listUserReducer,
});

export default rootReducer;
