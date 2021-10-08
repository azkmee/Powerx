import { shortenedSentence } from '../lib/utils';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { AuthContext } from '../service/auth.service';
import { MoviesContext, useFetchCommentsById, useFetchMovieById, useFetchMovies } from '../service/fetch.service';
import { Button } from '../components/button';

export const MovieByIdPage = ({

}) => {
    const auth = useContext(AuthContext)
    const movie = useContext(MoviesContext)

    const fetchMovieById = useFetchMovieById()
    const fetchCommentsById = useFetchCommentsById()
    const {id} = useParams()
    const { currentMovieById, currentCommentById } = movie
    const history = useHistory() 

    const [loading, setLoading ] = useState(false)

    useEffect( () => {
        setLoading(true)
        // resetMovieById()
        fetchMovieById(id)
        fetchCommentsById(id)
    }, [])

    useEffect( () => {
        if(currentMovieById && currentCommentById) {
            console.log(currentMovieById)
            console.log(currentCommentById)
            setLoading(false)
        }
    },[currentMovieById, currentCommentById])

    const handleBack = () => {
        history.push('/movies')
    }
    
    if(currentMovieById && currentCommentById && !loading){
        return(

            <div className='movie-component-by-id p-5 '>
                <div className ='text-center relative'>
                    <img className='block w-full m-auto opacity-30' src={currentMovieById.backdropUrl}/>
                    <div className='absolute w-1/2 h-full left-0 top-0 grid justify-items-center'> 
                        <img className='absolute h-full p-8 ' src={currentMovieById.posterUrl}/>
                    </div>
                    <div className='absolute w-1/2 h-full right-0 top-0 p-8 grid justify-items-center'>
                        <div className='bg-gray-200 w-full opacity-60'>
                            <b><h1 className='text-4xl mt-5'>{currentMovieById.title}</h1></b>
                            <p className='p-5'>{currentMovieById.overview}</p>
                        </div>

                    </div>
                </div>
                
                
                <div className = 'm-5 mb-0'>
                    <Button onClick={handleBack}>
                        Back
                    </Button>
                </div>
            </div>
        )
    } else return null
    
}