import {combineReducers} from 'redux';

const searchResults = {
    data: [],
    status: ''
};


const resultReducer = (results = searchResults, action) => {
    // if (action.type === 'INSERT') {
    //     searchResults.push(action.payload)
    //     console.log('main state', searchResults);
    //     return [...searchResults]
    // }

    console.log(action);
    switch (action.type) {
        case 'START':
            return {...searchResults, data: [], status: 'START'}
            // break;
        case 'SUCCESS':
            return {...searchResults, data: action.payload, status: 'SUCCESS'}
            // break;
        case 'FAILD':
            return {...searchResults, data: [], status: 'FAILD'}
            // break;
        default:
            return results
            // break;
    }

    return results
} 

export default combineReducers({
    results: resultReducer
})