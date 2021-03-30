import {combineReducers} from 'redux';

const searchResults = [];


const resultReducer = (results = searchResults, action) => {


    return results
} 

export default combineReducers({
    results: resultReducer
})