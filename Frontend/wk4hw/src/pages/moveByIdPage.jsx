import { shortenedSentence } from '../lib/utils';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { AuthContext } from '../service/auth.service';
import { MoviesContext, useFetchCommentsById, useFetchMovieById, useFetchMovies } from '../service/fetch.service';

export const MovieByIdPage = ({

}) => {
    const auth = useContext(AuthContext)
    const movie = useContext(MoviesContext)

    const fetchMovieById = useFetchMovieById()
    const fetchCommentsById = useFetchCommentsById()
    const {id} = useParams()
    const { currentMovieById, currentCommentById } = movie

    useEffect( () => {
        fetchMovieById(id)
        fetchCommentsById(id)
    }, [])

    useEffect( () => {
        if(currentMovieById && currentCommentById) {
            console.log(currentMovieById)
            console.log(currentCommentById)
        }
    },[currentMovieById, currentCommentById])
    
    return(
        <div className='movie-component '>
            
        </div>
    )
}