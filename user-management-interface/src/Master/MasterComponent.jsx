import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

export default class MasterComponent extends React.Component {}

var responseValue = {
    data : {},
    status : {}
}

export var setCookies = (key,val)=>{
Cookies.set(key, val, { path: '/' });
}

export var wsCallingNoBody = (url,method,headers) => 
    fetch(url, {
    headers: headers||{},
    method : method
})
.then(response => response.json())


export var wsCallingWithBody = (url,body,method,headers) => 
    fetch(url, {
    headers: headers,
    body:body,
    method : method
})
//.then(res => (res.ok ? res : Promise.reject(res)))
.then(response => response.json())

export var wsWithoutBody = (url,method,headers) =>{
    var head = {
        headers : headers
    }

    switch(method){
        case GET :
        return axios.get(url,head);
        case DELETE:
        return axios.delete(url,head);
        case PUT:
        return axios.put(url,head);    
    }
    
}

export var wsWithBody = (url,method,body,headers) =>{
    var head = {
        headers : headers
    }

    switch(method){
        case POST :
        return axios.post(url,body,head);
        case PUT:
        return axios.put(url,body,head);    
    }
}

export var getCookiesValuesByName = (name) =>{
    return Cookies.get(name);
}

export const TOKEN_COOKIES = 'token-cookies';
export const GET = 'GET';
export const DELETE = 'DELETE';
export const PUT = 'PUT';
export const POST = 'POST';
