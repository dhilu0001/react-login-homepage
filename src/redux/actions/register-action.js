import * as actionTypes from '../../constants/actionTypes';

const RegisterStart = () => ({
    type: actionTypes.REGISTER_START
});

const RegisterSuccess = ({ response }) => ({
    type: actionTypes.REGISTER_SUCCESS,
    payload: response
});

const RegisterFailure = ({ error })  => ({
    type: actionTypes.REGISTER_FAILURE,
    payload: error
});

export const Register = (data) => async dispatch => {
    dispatch(RegisterStart());
    try {
        let response = [];
        response.push(data);
        dispatch(RegisterSuccess({ response }))
    } catch (error){
        dispatch(RegisterFailure({ error }))
    }
}
