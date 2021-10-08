import { actionTypes as action } from "./actionTypes"
import { keywords } from './keywords'

export const authReducer = (state, event) => {
    switch (event.type) {
        case action.LOGIN:
            return {
                accessToken: event.payload,
                type: keywords.AUTHENTICATED,
            }
        case action.LOGOUT:
            return {
                accessToken: '',
                type: keywords.NOT_AUTHENTICATED_REGISTERED,
            }

        case action.REGISTER_SUCESS:
            console.log('reducer')
            return{
                ...state,
                type: keywords.NOT_AUTHENTICATED_REGISTERED
            }

        case action.REGISTER_ERROR:
            return{
                ...state,
                type: keywords.NOT_AUTHENTICATED_NOT_REGISTERED
            }
    
        default:
            throw new Error('invalid Reducer event')
    }
}