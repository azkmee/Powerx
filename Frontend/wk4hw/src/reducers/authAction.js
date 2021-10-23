import React, { useReducer } from "react"
import { actionTypes as action } from "./actionTypes"
import { keywords } from './keywords'
import { authReducer } from "./authReducers"


export const useAuthState = () => {
    const defaultState = {
        accessToken : null,
        type: keywords.NOT_AUTHENTICATED_NOT_REGISTERED,
    }
    const [state, dispatch] = useReducer(authReducer, defaultState);

    const login = (accessToken) => {
        dispatch({
            type: action.LOGIN,
            payload: accessToken
        })
    }

    const logout = () => {
        dispatch({
            type:action.LOGOUT,
        })
    }

    const registerSuccess = () => {
        console.log('authstate')
        dispatch({
            type:action.REGISTER_SUCESS,
        })
    }

    const registerError = () => {
        dispatch({
            type: action.REGISTER_ERROR,
        })
    }

    return {
        ...state,
        login,
        logout,
        registerSuccess,
        registerError,
    }
}