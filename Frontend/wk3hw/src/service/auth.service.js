import React, { useContext, useReducer } from 'react'
const AUTHENTICATED = 'authenticated'
const NOT_AUTHENTICATED = 'not-authenticated'
const BASE_URL = 'https://ecomm-service.herokuapp.com'


export const useAuthState = () => {
    const defaultState = {
        accessToken : null,
        type: NOT_AUTHENTICATED
    }
    const [state, dispatch] = useReducer(authReducer, defaultState);

    const login = (accessToken) => {
        dispatch({
            type: 'login',
            payload: accessToken
        })
    }

    const logout = () => {
        dispatch({
            type:'logout',
        })
    }

    return {
        ...state,
        login,
        logout,
    }
}

const authReducer = (state, event) => {
    switch (event.type) {
        case 'login':
            return {
                accessToken: event.payload,
                type: AUTHENTICATED,
            }
        case 'logout':
            return {
                accessToken: '',
                type: NOT_AUTHENTICATED,
            }
        default:
            throw new Error('invalid Reducer event')
    }
}

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


