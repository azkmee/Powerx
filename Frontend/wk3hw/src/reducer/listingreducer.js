import React from 'react'

const GET_LISTING_ACTION = 'get listing'
const LISTING_DEFAULT_STATE =[]

const listingReducer = (state, event) => {

    switch(event.type){
        case GET_LISTING_ACTION:
            return{
                state = event.payload,
            }
        default :
            throw new Error

    }
}

const getListings = (page=1) =>
  fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${page}`).then((res) => res.json());

export const useListingState = () => {

    const [listings, dispatchListing] = React.useReducer(listingReducer, LISTING_DEFAULT_STATE);

    const getListing = async () => {
        const data = await getListing()
        dispatch({
            type:GET_LISTING_ACTION,
            payload:data
        })
    }
    
    return {
        ...state,
        getListing,
    }

}