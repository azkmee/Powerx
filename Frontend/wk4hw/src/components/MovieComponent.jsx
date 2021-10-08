import { shortenedSentence } from '../lib/utils';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from './button';
import { useHistory } from 'react-router';

export const MovieComponent = ({
    _id,
    adult,
    overview,
    title,
    posterUrl,
    releasedate,
}) => {
    const history = useHistory()
    const handleOnClick = (e) => {
        history.push(`/movies/${_id}`)
    }
    return(
        <div className='movie-component border-2 h-100  grid-rows-3 relative'>
            <div>
                <img src={posterUrl} className='w-full'/>
            </div>
            <div className=' w-auto p-1' >
                <div className = 'h-20 mb-5 ' style={{height:'70px', overflow:'visible', textAlign:'center'}}>
                    <h1 className = 'text-xl ' ><b>
                        {title}
                    </b></h1>
                </div>
                <p className = 'text-justify'>{shortenedSentence(overview)}</p>
            </div>
            <div> 
                <Button type='default' className = ' w-4/5 justify-center left-0 bottom-0 mb-2' onClick={handleOnClick}>See More</Button>
            </div>
        </div>
    )
}