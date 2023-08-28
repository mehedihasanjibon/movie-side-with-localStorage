import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';


function App() {
  const [watchTime, setWatchTime] = useState("");

  const handleWatchTime = (time) => {
    // console.log(time);
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    // console.log(previousWatchTime);
    if(previousWatchTime){
      // console.log(previousWatchTime);
      const sum = previousWatchTime + time;
      // console.log(sum);
      localStorage.setItem("watchTime" , sum);
      setWatchTime(sum);
    }
    else{
      localStorage.setItem("watchTime" , time);
      setWatchTime(time);
    }
  };

  return (
    <div>
      <div className='header m-auto mb-3'>
      <Header></Header>
      </div>
        <div className='main row '>
          <div className='home-container col-md-8'>
            <Home handleWatchTime={handleWatchTime}></Home>
          </div>
          <div className='sideCart col-md-4 card'>
            <SideCart watchTime={watchTime}></SideCart>
          </div>
        </div>
    </div>
  )
}

export default App
