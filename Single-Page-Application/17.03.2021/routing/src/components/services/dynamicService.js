import React from 'react';
import {useParams} from 'react-router-dom';

const DynamicService = () => {

    let parameters = useParams();
    console.log(parameters);

    return (
        <div>
            <h1>404</h1>
            there is no page called {parameters.par}
        </div>
    );
};

export default DynamicService;