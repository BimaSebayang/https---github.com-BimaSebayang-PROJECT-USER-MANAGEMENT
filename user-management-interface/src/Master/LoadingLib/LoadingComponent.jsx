import MasterComponent from "../MasterComponent";
import Loader from 'react-loader-spinner';
import React from 'react';
export default class LoadingComponent extends MasterComponent
{

    constructor(props){
        super(props);
        debugger;
    }

    render(){
        return(
        <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
             alignItems: "center"
          }}
          >
            <Loader {...this.props}  height="200" width="200" />
          </div>)
    }

}