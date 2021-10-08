import { useContext } from "react"
import { useAuthState } from "../reducers/authAction"

export const fetchAPI = async ({
    url,
    method="GET",
    accessToken=false,
}) => {
    let headers = {
        "Content-Type":"application/json",
    }

    if(accessToken){
        headers = {
            ...headers,
            "Authorization":accessToken
        }
    }
    return fetch(url, {
        method,
        headers,
    })
    .then(res => res.json())
    .catch(err=>{
        throw err;
    });
}