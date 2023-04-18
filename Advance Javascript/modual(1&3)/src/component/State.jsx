import React, { useState } from 'react';

function State(props) {
    const[count,setcount] = useState(0)
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-success' onClick={()=>{setcount(count+1)}}>increemnt</button>
                        <h1>{count}</h1>
                        <button className='btn btn-success' onClick={()=>{setcount(count-1)}}>decrement</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default State;