import * as actionTypes from '../../constants/actionTypes';
import Axios from 'axios';

const fetchUsersStart = () => ({
    type: actionTypes.FETCH_USERS_START
});

const fetchUsersSuccess = ({ response }) => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: response.data
});

const fetchUsersFailure = ({ error })  => ({
    type: actionTypes.FETCH_USERS_FAILURE,
    payload: error
});

export const fetchUsersList = () => async dispatch => {
    dispatch(fetchUsersStart());
    try {
        const response = await Axios.get('https://randomuser.me/api/0.8/?results=20');
        dispatch(fetchUsersSuccess({ response }))
    } catch (error){
        dispatch(fetchUsersFailure({ error }))
    }
}
