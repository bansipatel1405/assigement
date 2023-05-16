// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Slider from './component/Slider';  


function App() {
  const[loader,setloader] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setloader(false)
    }, 1000);
  })
  return (
    <>
    {
    loader?
    <div className='loader'>
      <img src='image/loading.gif'/>
      </div>
      :
      <>
      <Header/>
      <Nav/>
      {/* <Slider/> */}
      </>
    }
    </>
    
  );
}

export default App;
