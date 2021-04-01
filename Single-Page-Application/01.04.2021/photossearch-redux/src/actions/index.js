import { getData } from "../api";

export const getDataAction = (text) => {
    return dispatch => {
        dispatch({
            type: 'START', 
            payload: []
        });

        getData(text).then(data => {
            dispatch({
                type: 'SUCCESS',
                payload: data
            })
        }).catch(error => {
            dispatch({
                type: 'FAILED'
            })
        })
    }
}