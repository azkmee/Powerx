import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../service/auth.service';
import { keywords } from '../reducers/keywords';
import {  MoviesContext, useFetchMovies } from '../service/fetch.service';
import { shortenedSentence } from '../lib/utils';
import { Button } from '../components/button';
import { Label } from '../components/label';
import { MovieComponent } from '../components/MovieComponent';



export const MoviePage = ({

}) => {
    const auth = useContext(AuthContext)
    const movieStateDispatch = useContext(MoviesContext)

    const history = useHistory()
    const { currentMovielists, getMoviesReset } = movieStateDispatch
    
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ movies, setMovies ] = useState([])
    const [loading, setLoading ] =useState(false)
    // if (auth.type !== keywords.AUTHENTICATED) {
    //   history.push('/login')
    // }

    const fetchMovies = useFetchMovies()

    useEffect( () => {
        fetchMovies(currentPage)
        setLoading(true)
    }, [])

    useEffect( () => {
        if(currentMovielists) {
            const moviesToSet = currentMovielists.map(movie => {
                return {
                    ...movie,
                    key: movie.id
                }
            })
            setLoading(false)
            setMovies(currentMovielists)
            console.log(currentMovielists, 'inside use effect')
        }
    }, [currentMovielists])

    useEffect(() => {
        fetchMovies(currentPage)
        setLoading(true)
    },[currentPage])

    

    return (
        <>
        <div className='p-4'>
            {!loading ? 
                <div className='grid grid-cols-4 gap-10 p-4 mb-8' >
                    {movies.map(item => (
                        <MovieComponent {...item} />
                    ))}
                </div>:
                null}
        </div>
        <div className = 'fixed bottom-0 w-full gap-4 mb-2'>
            { currentPage > 0 ? 
                <Button className = 'left-5 mx-10' onClick={()=>setCurrentPage(currentPage-1)}>
                    Prev
                </Button>: null}
            <Button className = 'right-5 mx-10' onClick={()=>setCurrentPage(currentPage+1)}>
                Next
            </Button>
        </div>

        </>
    )
}

