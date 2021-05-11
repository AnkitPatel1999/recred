import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Products from './user/Products'

const Routes = () => {

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Signup } />
            <Route path="/products" exact component={ Products } />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;