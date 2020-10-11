import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GET, getCookiesValuesByName, TOKEN_COOKIES, wsCallingNoBody } from '../Master/MasterComponent';
import Async from 'react-async';
import LoadingComponent from '../Master/LoadingLib/LoadingComponent';
const loadConfig = () => 
wsCallingNoBody("/api/authenticationCtl/checkMyAuth",GET,{token:getCookiesValuesByName(TOKEN_COOKIES)})  

var scope = {
    splitterStyle: {
        height: 100
    }
};

export default class PrivateRouteComp extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Async promiseFn={loadConfig}>
                {({ data, isLoading }) => {
                    debugger
                    if (isLoading) {
                     return   <LoadingComponent type="BallTriangle" color="#2BAD60"/>
                    }
                    else {
                        if(data == undefined){
                            return <Redirect to="/error"/>
                        }
                        else if (data.violation.violation) {
                            return <Redirect to='/login' />
                        }
                        else {
                            return <Route exact path={this.props.path} component={this.props.component} />
                        }
                    }
                }
                }

            </Async>
        )

        //   if(this.loadConfig){
        //       return  <Redirect to='/login' />
        //   }
        //   else{
        //       return <Route exact path={this.props.path} component={this.props.component} /> 
        //   }
    }
}