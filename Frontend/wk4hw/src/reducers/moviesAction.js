import React, { useReducer } from "react"
import { actionTypes as action } from "./actionTypes"
import { keywords } from './keywords'
import { movieReducers, defaultState } from "./moviesReducers"


export const useMovieState = () => {
    
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
    
    const getMovieByIdSuccess = (data) => {
        dispatch({
            type:action.GET_MOVIE_BY_ID_SUCCESS,
            payload: {data}
        })
    }
    const getMovieByIdError = (data) => {
        dispatch({
            type:action.GET_MOVIE_BY_ID_ERROR,
            payload: {data}
        })
    }
    const getCommentsByIdSuccess = (data) => {
        dispatch({
            type:action.GET_COMMENTS_BY_ID_SUCCESS,
            payload: {data}
        })
    }
    const getCommentsByIdError = (data) => {
        dispatch({
            type:action.GET_COMMENTS_BY_ID_ERROR,
            payload: {data}
        })
    }
    const resetState = () => {
        dispatch({
            type:action.RESET_STATE,

        })
    }


    return {
        ...state,
        getMoviesSuccess,
        getMoviesError,
        getMovieByIdSuccess,
        getMovieByIdError,
        getCommentsByIdSuccess,
        getCommentsByIdError,
        resetState,
    }
}