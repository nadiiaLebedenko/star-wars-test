import React, {useState, useEffect} from 'react';
import logo from './assets/star-wars-gold.svg';

import Loader from './components/Loader';
import Input from './components/Input';
import MovieDetails from './components/MovieDetails';
import Error from './components/Error';

import {loadData} from './utils/data-utils';
import {MOVIES_URL, ERROR_MESSAGE} from './utils/constants';
import './App.css';

function App() {
    const [error, setError] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [title, setTitle] = useState('');

    useEffect(async () => {
        try {
            const result = await loadData(MOVIES_URL);
            setMovies(result.results);
        } catch (e) {
            setError(e);
        }
    }, []);

    useEffect(() => {
        if (title) {
            const searchTitle = title.toLowerCase();
            const searchedMovie = movies.find((movie) => movie.title.toLowerCase() === searchTitle);
            if (searchedMovie) {
                setSelectedMovie(searchedMovie);
                setError('');
            } else {
                setError(ERROR_MESSAGE);
                setSelectedMovie(null);
            }
        } else {
            setError('');
            setSelectedMovie(null);
        }
    }, [title])

    const onSearch = (title) => setTitle(title);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {error ? <Error error={error}/> : null}
            </header>
            <Input onSearch={onSearch}/>
            {selectedMovie
                ? <MovieDetails movie={selectedMovie}/>
                : null
            }
        </div>
    );
}

export default App;
