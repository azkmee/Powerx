import React, { useReducer } from "react"
import { actionTypes as action } from "./actionTypes"
import { keywords } from './keywords'
import { movieReducers } from "./moviesReducers"


export const useMovieState = () => {
    const defaultState = {
        currentMovielists : null,
    }
    const [state, dispatch] = useReducer(movieReducers, defaultState);

    const getMoviesSuccess = (data) => {
        dispatch({
            type:action.GET_MOVIES_SUCCESS,
            payload: {data}
        })
    }

    const getMoviesError = (data) => {
        dispatch({
            type:action.GET_MOVIES_ERROR,
            payload: {data}
        })
    }

    return {
        ...state,
        getMoviesSuccess,
        getMoviesError,
    }
}