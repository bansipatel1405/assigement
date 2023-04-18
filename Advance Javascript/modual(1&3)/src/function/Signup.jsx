import React from 'react';
import { Link } from 'react-router-dom';

function Signup(props) {
    return (
        <div>
                        <div className="container d-flex justify-content-center align-items-center bg-primary vh-100">
                <div className="bg-white p-5 rounded">
                    <h2>Sign-Up</h2>
                <form action="">
                <div className='mt-3'>
                        <label htmlFor="name"> <strong>Name</strong></label>
                        <input type="Name" placeholder='Enter Name' className='form-control rounded-0' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="email"> <strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' className='form-control rounded-0' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter password'  className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success mt-2 w-100 rounded-0'>sign in</button>
                    <p>you are agree to our terms and policies</p>
                    <Link to="/Login" className='btn btn-default border w-100 bg-light rounded-0'>Log in</Link>


                </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;