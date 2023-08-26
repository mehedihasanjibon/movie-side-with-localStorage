import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="movie-container">
                <div className='movie-card card text-center w-100 m-auto'>
                    <div className='movie-poster w-25 m-auto'>
                        <img className='w-75' src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg" alt="" />
                    </div>
                    <h3> Dark Movie</h3>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing. </p>
                    <div className="timeAndRating d-flex justify-content-around">
                        <p> WatchTime </p>
                        <p> Rating </p>
                    </div>
                    <button className='btn btn-info w-75 m-auto'> Book Now </button>
                </div>
            </div>
        </div>
    );
};

export default Home;