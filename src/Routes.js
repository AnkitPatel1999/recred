import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Signup } />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;