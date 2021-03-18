import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/pageHeader';

const App = () => {
    return (
        <>
            <PageHeader />
        </>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
