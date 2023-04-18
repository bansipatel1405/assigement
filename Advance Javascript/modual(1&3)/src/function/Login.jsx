import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginvalidation';

function Login(props) {
    const[valuse,setvalue] = useState({
        email:" ",
        password:" "
       
    })
    const handleInput = (event)=>{
        setvalue(prev =>({...prev,[event.traget.name]:[event.target.value]}))
    }
    const handlesumbmit = (event)=>{
        event.preventDefault();
        // setvalue(valadition(valuse))
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center bg-primary vh-100">
                <div className="bg-white p-5 rounded">
                <form action=""  onSubmit={handlesumbmit}>
                    <div className='mt-3'>
                        <label htmlFor="email"> <strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='emil' onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter password' onChange={handleInput}  className='form-control rounded-0' name='password'/>
                    </div>
                    <button type='submit' className='btn btn-success mt-2 w-100 rounded-0'>Log in</button>
                    <p>you are agree to our terms and policies</p>
                    <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0'>create account</Link>


                </form>
                </div>
            </div>
        </>
    );
}

export default Login;