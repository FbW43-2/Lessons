import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';
import SearchBar from './components/searchbar';

const App = () => {
    return (
        <>
           <SearchBar />
        </>
    );
};

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>
, document.getElementById('root'));

//https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=Hamburg&format=json&srlimit=10