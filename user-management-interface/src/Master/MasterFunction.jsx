import React from 'react';
import Cookies from 'js-cookie';


export class MasterFunction{

    getCookiesValueByName(name){
        return Cookies.get(name) ;
    }

}

export default new MasterFunction();