import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './components/pageHeader';
import Slider from './components/slider';

const App = () => {
    return (
        <>
            <PageHeader />
            <Slider />
        </>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
