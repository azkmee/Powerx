import React, { useContext } from 'react'
// import { keywords } from '../reducers/keywords'
// import { authReducer } from '../reducers/authReducers'
// import { actionTypes } from '../reducers/actionTypes'
import { useAuthState } from '../reducers/authAction'

const BASE_URL = 'https://ecomm-service.herokuapp.com'

const login = async (email, password) =>
    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            // 'Accept': 'application/json',
        },
        body: JSON.stringify({
            username: email,
            password,
        }),
    })
    .then(res=> {
        if(res.ok){
            return res.json()
        }
        else {
            const error = new Error(res.statusText);
            error.response = res;
            throw error;
        } 
        })
    .catch(err=>{
        throw err;
    });

const register = async (username, password, email) => {
    fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": username,
            "email": email,
            "password": password,
            "avatar": "http://www.google.png"
        }),
    })
    .then(res=> {
        if(res.ok){
            return res.json()
        }
        else {
            const error = new Error(res.statusText);
            error.response = res;
            console.log(error)
        } 
    })
    .catch(err=>{
        throw err;
    });
    
}

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const auth = useAuthState() //return state and method to update state
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useLogin = () => {
    const auth = useContext(AuthContext);

    return function invokeLogin (email, password) {
    
        return login(email,password)
            .then((res) => {
                auth.login(res.access_token);
                console.log('logged in');
            })
            .catch((err)=>{
                console.log(err, 'login failed')
            })
    }
}

export const useRegister = () => {
    const auth = useContext(AuthContext);

    return function invokeRegister(username, email, password) {
        
        return register(username, email, password)
            .then((res) => {
                auth.registerSuccess();
            })
            .catch((err) => {
                auth.registerError();
                console.log(err, 'register fail')
            })
    }
}


