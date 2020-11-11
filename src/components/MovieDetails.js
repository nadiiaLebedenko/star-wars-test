import React, {useState, useEffect} from 'react';
import Loader from './Loader';
import {loadData} from "../utils/data-utils";



function MovieDetails({movie}) {
    const [visibleLoader, setVisibleLoader] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const promises = movie.characters
            .map((characterUrl) => loadData(characterUrl));
        Promise.all(promises).then((characters) => {
            setVisibleLoader(false);
            setCharacters(characters.map((char) => char.name));
        });
    }, [movie])


    if (visibleLoader) {
        return (<Loader/>)
    } else {
        return <div className='App-movie-details'>
            <div className='App-movie-field'>
                <div className='App-movie-field-name'>Title</div>
                <div className='App-movie-field-value'>{movie.title}</div>
            </div>
            <div className='App-movie-field'>
                <div className='App-movie-field-name'>Opening crawl</div>
                <div className='App-movie-field-value'>{movie.opening_crawl}</div>
            </div>
            <div className='App-movie-field'>
                <div className='App-movie-field-name'>Director</div>
                <div className='App-movie-field-value'>{movie.director}</div>
            </div>
            <div className='App-movie-field'>
                <div className='App-movie-field-name'>Release date</div>
                <div className='App-movie-field-value'>{movie.release_date}</div>
            </div>
            <div className='App-movie-field'>
                <div className='App-movie-field-name'>Characters</div>
                <div className='App-movie-field-value'>{characters.join(', ')}</div>
            </div>
        </div>
    }
}

export default MovieDetails;
