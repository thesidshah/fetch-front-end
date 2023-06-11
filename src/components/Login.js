import axios from "axios";
import React from 'react';
import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";

import Input from "./Input";
import { Navigate } from "react-router-dom";



const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){

    const [loginState,setLoginState]=useState(fieldsState);
    const [isUserLoggedIn,setIsUserLoggedIn]=useState(false);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        authenticateUser(e);
        
    }
    
    const [error, setError] = useState(null);

    //Handle Login API Integration here
    const authenticateUser = (e) =>{
        
        
        const sendRequest = (args) => {
            axios.post('https://frontend-take-home-service.fetch.com/auth/login', {'name':args.name, 'email':args.email})
            .then(response => {
                console.log(response);
                setIsUserLoggedIn(true);
               })
            .catch(error => {console.log(error); setError('Invalid Credentials');});
        }
        const args = {
            email: e.target[0].value,
            name: e.target[1].value
        }
        sendRequest(args);
    }
    
    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p> }
        <FormAction handleSubmit={handleSubmit} text="Login" id='loginbtn' />
            {isUserLoggedIn && <Navigate to='/home'/>}
      </form>
    )
}