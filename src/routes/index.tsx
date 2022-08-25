import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Registration from '../pages/Registration';


const Routes: React.FC = () => (
    <BrowserRouter> 
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/registration' exact component={Registration}/>

        </Switch>
    </BrowserRouter>
)

export default Routes;