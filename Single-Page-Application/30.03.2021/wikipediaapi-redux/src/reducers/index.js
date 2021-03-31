import {combineReducers} from 'redux';

const searchResults = {
    data: [],
    status: '',
    selectedIdx: -1
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
            return {...searchResults, data: [], status: 'START', selectedIdx: -1}
            // break;
        case 'SUCCESS':
            return {...searchResults, data: action.payload.query.search, status: 'SUCCESS', selectedIdx: -1}
            // break;
        case 'FAILD':
            return {...searchResults, data: [], status: 'FAILD', selectedIdx: -1}
            // break;
        case 'SELECT_INDEX':
            return {...searchResults, selectedIdx: action.payload}
            // break;
        default:
            return results
            // break;
    }

    //return results
} 

export default combineReducers({
    results: resultReducer
})