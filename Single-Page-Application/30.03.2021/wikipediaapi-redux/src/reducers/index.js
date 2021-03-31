import {combineReducers} from 'redux';

const searchResults = [];


const resultReducer = (results = searchResults, action) => {
    if (action.type === 'INSERT') {
        searchResults.push(action.payload)
        console.log('main state', searchResults);
        return [...searchResults]
    }

    return results
} 

export default combineReducers({
    results: resultReducer
})