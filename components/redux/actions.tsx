export const SET_NAME = 'SET_NAME';

export const setName = name => dispatch => {
    dispatch({
        type:SET_NAME,
        payload: name
    });
}