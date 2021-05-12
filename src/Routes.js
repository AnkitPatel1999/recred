import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Products from './user/Products'
import Cart from './user/Cart'

const Routes = () => {

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Signup } />
            <Route path="/products" exact component={ Products } />
            <Route path="/cart" exact component={ Cart } />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;