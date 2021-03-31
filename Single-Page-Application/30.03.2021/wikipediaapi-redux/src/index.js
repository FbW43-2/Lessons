import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';

import reducers from './reducers';
import SearchBar from './components/searchbar';
import Content from './components/content';

const App = () => {
    return (
        <>
           <SearchBar />
           <Content />
        </>
    );
};

ReactDOM.render(
<Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
</Provider>
, document.getElementById('root'));

//https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=Hamburg&format=json&srlimit=10