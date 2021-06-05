import React from "react";
import { Route, Switch } from 'react-router-dom';

import AddProductButton from '../components/AddProductButton'
import AddProductForm from '../components/AddProductForm'
import ProtectedRoute from "../auth/protected-route";

import profile from '../views/profile.js'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" component={AddProductForm} exact />
            <ProtectedRoute path="/product/add" component={AddProductButton} />
            <ProtectedRoute path="/profile" component={profile} />
            {/* <Route path="/product/edit" component={AddProductForm} />
            <Route path="/category/add" component={AddProductForm} />
            <Route path="/category/edit" component={AddProductForm} />
            <Route path="/provider/add" component={AddProductForm} />
            <Route path="/provider/edit" component={AddProductForm} />
            <Route path="/table" component={AddProductForm} /> */}
            <Route component={Error} />
        </Switch>
    );
};

export default Routes;