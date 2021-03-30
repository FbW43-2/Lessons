import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers'

const App = () => {
    return (
        <div>
            
        </div>
    );
};


ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>
, document.getElementById('root'));

//https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=Hamburg&format=json&srlimit=10