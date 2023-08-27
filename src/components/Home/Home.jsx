import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Home = () => {
    const [movies ,setMovies] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data));
    }, [])

    return (
        <div>
            <div className="movie-container">
                {
                    movies.map(movie => <SingleCart
                        key={movie.id}
                        movie={movie}
                    ></SingleCart>)
                }
            </div>
        </div>
    );
};

export default Home;