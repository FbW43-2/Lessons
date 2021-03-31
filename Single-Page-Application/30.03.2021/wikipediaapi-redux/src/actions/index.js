import { getResult } from "../api"

export const insertAction = (text) => {
    return (dispatch) => {
        dispatch({
            type: 'START',
            payload: null
        })
        getResult(text).then(data => {
            dispatch({
                type: 'SUCCESS',
                payload: data
            })
        }).catch(error => {
            dispatch({
                type: 'FAILD',
                payload: error
            })
        })
    }
    // getResult(text).then(data => {
    //     return {
    //         type: 'INSERT',
    //         payload: data
    //     }
    // })
    
}