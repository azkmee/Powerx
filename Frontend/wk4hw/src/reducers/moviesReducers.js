import { actionTypes as action } from "./actionTypes"
import { keywords } from './keywords'

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


        default:
            throw new Error('invalid Reducer event')
    }
}