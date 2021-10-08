import { actionTypes as action } from "./actionTypes"
import { keywords } from './keywords'

export const defaultState = {
    currentMovielists : null,
    currentMovieById: null,
    currentCommentById :null
}


export const movieReducers = (state, event) => {
    switch (event.type) {
        case action.GET_MOVIES_SUCCESS:
            return {
                ...state,
                currentMovielists: event.payload.data
            }
        case action.GET_MOVIES_ERROR:
            return {
                ...state,
                currentMovielists: null
            }
        case action.GET_MOVIE_BY_ID_SUCCESS:
            return {
                ...state,
                currentMovieById: event.payload.data
            }
        case action.GET_MOVIE_BY_ID_ERROR:
            return {
                ...state,
                currentMovieById: null
            }
        case action.GET_COMMENTS_BY_ID_SUCCESS:
            return {
                ...state,
                currentCommentById: event.payload.data
            }
        case action.GET_COMMENTS_BY_ID_ERROR:
            return {
                ...state,
                currentCommentById: null
            }


        default:
            throw new Error('invalid Reducer event')
    }
}