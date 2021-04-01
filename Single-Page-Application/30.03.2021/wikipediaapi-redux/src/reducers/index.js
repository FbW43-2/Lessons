import {combineReducers} from 'redux';

let searchResults = {
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
            searchResults = {data: [], status: 'START', selectedIdx: -1}
            return {...searchResults}
            // break;
        case 'SUCCESS':
            searchResults = {data: action.payload.query.search, status: 'SUCCESS', selectedIdx: -1};
            return {...searchResults }
            // break;
        case 'FAILD':
            searchResults = {data: [], status: 'FAILD', selectedIdx: -1};
            return {...searchResults }
            // break;
        case 'SELECT_INDEX':
            searchResults.selectedIdx = action.payload;
            return {...searchResults }
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