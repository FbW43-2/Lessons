import React from 'react';

import { useRouteMatch, Switch, Link, Route } from 'react-router-dom';
import Service1 from './services/service1';
import Service2 from './services/service2';
import Service3 from './services/service3';

const Services = () => {


    let { path } = useRouteMatch();
    console.log(path);
    return (
            <Switch>
                <Route exact path={path}>
                    <div>
                        this is services page
                        <Link to={`${path}/service1`} > Service1  </Link>
                        <Link to={`${path}/service2`} > Service2  </Link>
                        <Link to={`${path}/service3`} > Service3  </Link>
                        
                    </div>
                </Route>
                <Route path={`${path}/service1`} > <Service1/> </Route>
                <Route path={path + '/service2'} > <Service2/> </Route>
                <Route path={path + '/service3'} > <Service3/> </Route>
            </Switch>
    );
};
export default Services;