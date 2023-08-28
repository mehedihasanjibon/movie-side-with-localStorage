import React, { useEffect } from 'react';

const SideCart = ({watchTime}) => {

    useEffect(() => {
        const getWatchTimeFromStorage = localStorage.getItem('watchTime');
        console.log(getWatchTimeFromStorage);
    } , [])

    return (
        <div>
            <h1> My Cart </h1>

            <div className='mt-5 text-center'>
                <p> Total watch time </p>
                <input type="text" value={0} disabled/>
            </div>
            <h5 className='mt-5'> Add Break time </h5>

            <button className='w-25 btn-circle m-1 btn btn-info'> 15 </button>
            <button className='w-25 btn-circle m-1 bg-warning btn'> 20 </button>
            <button className='w-25 btn-circle m-1 bg-danger btn'> 25 </button>

            <input className='mt-2' type="text" value={0} disabled />
            <button className='mt-5 btn btn-info w-100'> complete </button>
        </div>
    );
};

export default SideCart;