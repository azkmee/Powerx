import { useContext } from "react"
import { useAuthState } from "../reducers/authAction"

export const fetchAPI = async ({
    url,
    method="GET",
    accessToken=false,
    bodySend,
}) => {
    let headers = {
        "Content-Type":"application/json",
    }
    let body= null;

    if(accessToken){
        headers = {
            ...headers,
            "Authorization":accessToken
        }
    }
    if(bodySend){
        body = JSON.stringify({
          ...bodySend,  
        })
    }
    
    return fetch(url, {
        method,
        headers,
        body,
    })
    .then(res => res.json())
    .catch(err=>{
        throw err;
    });
}