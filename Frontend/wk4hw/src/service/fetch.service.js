import React, { useContext } from 'react'
import { fetchAPI } from '../lib/fetchAPI';
import { useMovieState } from '../reducers/moviesAction';
import { AuthContext } from './auth.service';


const BASE_URL = 'https://ecomm-service.herokuapp.com'

const fetchMovies = async (page, limit=12) => {
    return fetchAPI({
        url:`${BASE_URL}/movie?page=${page}&limit=${limit}`
})}

const fetchMovieById = async (id) => {
    return fetchAPI({
        url:`${BASE_URL}/movie/movie/${id}`,
    })
}

const fetchCommentsById = async (id) => {
    return fetchAPI({
        url:`${BASE_URL}/movie/movie/${id}/comment`,
    })
}

export const MoviesContext = React.createContext();

export const MoviesProvider = ({children}) => {
    const movie = useMovieState() //return state and method to update state
    return (
        <MoviesContext.Provider value={movie}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useFetchMovies = () => {
    const {getMoviesSuccess,getMoviesError } = useContext(MoviesContext)
    
    return function invokeFetchMovies(page, limit){

        return fetchMovies(page, limit)
            .then((res) => {
                getMoviesSuccess(res)
            })
            .catch((err) => {
                getMoviesError()
                console.log(err, 'Error fetching All movies')
            })
    }
}

export const useFetchMovieById = () => {
    const { getMovieByIdSuccess, getMovieByIdError } = useContext(MoviesContext)

    return function invokeFetchMovieById(id) {
        return fetchMovieById(id)
            .then(res => {
                getMovieByIdSuccess(res)
            }).catch(err => {
                getMovieByIdError(err)
                console.log(err)
            })
    }
}

export const useFetchCommentsById = () => {
    const { getCommentsByIdSuccess, getCommentsByIdError } = useContext(MoviesContext)

    return function invokeFetchMovieById(id) {
        return fetchCommentsById(id)
            .then(res => {
                getCommentsByIdSuccess(res)
            }).catch(err => {
                getCommentsByIdError(err)
                console.log(err)
            })
    }
}