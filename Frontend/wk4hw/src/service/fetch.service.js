import React, { useContext } from 'react'
import { useMovieState } from '../reducers/moviesAction';
import { AuthContext } from './auth.service';


const BASE_URL = 'https://ecomm-service.herokuapp.com'

export const fetchMovies = async (page, limit=12) => {
    return fetch(`${BASE_URL}/movie?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            // 'Accept': 'application/json',
        },
    })
    .then(res=> {
        return res.json()
    })
    .catch(err=>{
        throw err;
    });
}   

// export const MoviesContext = React.createContext();

// export const AuthProvider = ({children}) => {
//     const auth = useMovieState() //return state and method to update state
//     return (
//         <MoviesContext.Provider value={auth}>
//             {children}
//         </MoviesContext.Provider>
//     )
// }

// export const useFetchMovies = () => {
//     const movies = useContext(MoviesContext)
    
//     return function invokeFetchMovies(page, limit){

//         return fetchMovies(page, limit)
//             .then((res) => {
//                 movies.getMoviesSuccess(res)
//                 console.log(res, 'service')
//             })
//         // console.log(movies, 'movies')
//         // return fetchMovies(page, limit)
//         //     .then(res => {
//         //         console.log(res, 'fetch')
//         //         return res
//         //     })
//         //     .catch(res => {
//         //         console.log('fetch fail')
//         //     })
//     }
// }