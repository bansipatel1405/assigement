import React, { useEffect, useState } from 'react';

function Api(props) {
    const[data,setdata] = useState({fetchdata:"", status:"loading"})

    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/comments').then((res=>res.json())).then((Responce)=>{
                console.log(Responce);
                setdata({fetchdata:Responce,status:"completed"})
            })
        },2000)
    })



    return (
        <>
    <div className="container">
        <div className="row">
            <div className="col">
                {data.status}
                {/* {data.status==="completed"?<div>{JSON.stringify(data.fetchdata)}</div>:"no data found"} */}
                {Object.entries(data.fetchdata).map((velue)=>{
                    console.log(velue);
                   
                    return<>
                       <table className='table table-bordered'>
                        <tr>
                            <td>{velue[1].id}</td>
                            <td>{velue[1].postId}</td>
                            <td>{velue[1].name}</td>
                            <td>{velue[1].email}</td>
                            <td>{velue[1].body}</td>
                        </tr>
                        
                       </table>
                    </>
                })}
                
            </div>
        </div>
    </div>
        </>
    );
}

export default Api;