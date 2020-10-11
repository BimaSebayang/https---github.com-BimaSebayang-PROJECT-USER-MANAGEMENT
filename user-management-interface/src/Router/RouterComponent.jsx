import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Component/Dashboard.jsx";
import ErrorPage from "../Component/ErrorPage.jsx";

import Login from "../Component/Login.jsx";
import NotFound from "../Component/NotFound.jsx";
import PrivateRouteComp from "../Config/PrivateRouteComp.jsx";
import MasterComponent from "../Master/MasterComponent.jsx";
class RouterComponent extends MasterComponent {

    render() {

        return (

            <Switch>
                 {/* -- exact digunakan pada path '/' 
                    karena menghindari dipanggil untuk path 
                     yang lain yang menggunakan '/' */}
                <PrivateRouteComp exact path='/' component={Dashboard} />  
                <Route exact path='/login' component={Login} />  
                <Route exact path="/error" component={ErrorPage}/>
                <Route component={NotFound}/>
              
            </Switch>
        );

    }


}

export default RouterComponent