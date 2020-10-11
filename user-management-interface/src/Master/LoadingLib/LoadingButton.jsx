import MasterComponent from "../MasterComponent"
import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

var SpinnerCustom = (props) =>{
    return(
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
    );
}


export default class LoadingButton extends MasterComponent{

    constructor(props){
        super(props);
        debugger;
    }
    
    render(){
        return(

            <button  {...this.props} disabled={this.props.valueloading}
                     onClick={this.props.onClick} >
                     {!this.props.valueloading ? this.props.buttonname : 
                       <SpinnerCustom/>  
                     }
            </button>
        );
    }

}