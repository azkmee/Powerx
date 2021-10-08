import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../service/auth.service';
import { keywords } from '../reducers/keywords';
import {  fetchMovies } from '../service/fetch.service';

const MovieComponent = ({
item,
}) => {


    return(
        <div className='movie-component'>
            <div className='border-2 w-auto ' style={{height:'65vh'}}>{item}</div>

            
        </div>
    )
}

export const MoviePage = ({

}) => {
    const auth = useContext(AuthContext)

    const history = useHistory()
    
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ movies, setMovies ] = useState([])
    // if (auth.type !== keywords.AUTHENTICATED) {
    //   history.push('/login')
    // }

    useEffect( async () => {
        const fromAPI = await fetchMovies(currentPage)
        setMovies(fromAPI)
    }, [])

    useEffect( () => {
        if(movies) {
            console.log(movies, 'inside use effect')

        }
    }, [movies])

    return (
        <div className='grid grid-cols-4 gap-10 p-4' style={{height:'200vh'}}>
            {movies.map(item => (
                <MovieComponent item={item.title}/>
            ))}
        </div>
    )
}