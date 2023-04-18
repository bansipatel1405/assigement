import React from 'react';
import{Usestate} from 'react';
import{useEffect} from 'react'
import Api from './01Api';

function Loader(props) {
    const[loader,setloader] = Usestate(true)
    useEffect(()=>{
        setTimeout(()=>{
            setloader(false)
        },2000)
    })
    
    return (
        <>
            {
            loader?
    <>
        <div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
    </>
    :
<>
                <Api/>
</>
}
        </>
    );
}

export default Loader;