import {combineReducers} from 'redux';

let resultData = {
    data: [],
    status: ''
}

const resultReducer = (results = resultData, action) => {

    //console.log(action);
    switch (action.type) {
        case 'START':
            resultData = {data: [], status: 'START'}
            return {...resultData}
        case 'SUCCESS':
            resultData = {data: action.payload.hits, status: 'SUCCESS'}
            return {...resultData}
        case 'FAILED':
            resultData = {data: [], status: 'FAILED'}
            return {...resultData}
    
        default:
            return results;
    }

    

}

export default combineReducers({
    results: resultReducer
})