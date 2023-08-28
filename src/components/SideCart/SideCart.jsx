import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCart = ({watchTime}) => {
    const [time, setTime] = useState(watchTime);

    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const getWatchTimeFromStorage = localStorage.getItem('watchTime');
        // console.log(getWatchTimeFromStorage);
        setTime(getWatchTimeFromStorage);
        const getBreakTime = localStorage.getItem("breakTime");
        setBreakTime(getBreakTime);
    } , [watchTime]);

    const handleBreakTime = (bt) => {
        // console.log(bt);
        localStorage.setItem("breakTime" , bt);
        setBreakTime(bt);
    }

    const handleComplete = () => {
        toast("Wow so easy!");
    }

    return (
        <div>
            <h1> My Cart </h1>

            <div className='mt-5 text-center'>
                <p> Total watch time </p>
                <input type="text" value={time} disabled/>
            </div>
            <h5 className='mt-5'> Add Break time </h5>

            <button onClick={()=> handleBreakTime(15)} className='w-25 btn-circle m-1 btn btn-info'> 15 </button>
            <button className='w-25 btn-circle m-1 bg-warning btn'> 20 </button>
            <button className='w-25 btn-circle m-1 bg-danger btn'> 25 </button>

            <input className='mt-2' type="text" value={breakTime} disabled />
            <button onClick={handleComplete} className='mt-5 btn btn-info w-100'> complete </button>
        </div>
    );
};

export default SideCart;