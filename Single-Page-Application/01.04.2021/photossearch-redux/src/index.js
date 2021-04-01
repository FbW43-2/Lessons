import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import reducers from './reducers'
import Searchbar from './components/searchbar';
import Gallery from './components/gallery';

const App = () => {
    return (
        <>
            <Searchbar />
            <Gallery />
        </>
    );
};

ReactDOM.render(
<Provider store={createStore( reducers, applyMiddleware(thunk))}>
    <App />
</Provider>


, document.getElementById('root'))