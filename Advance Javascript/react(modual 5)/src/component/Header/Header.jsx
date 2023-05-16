import React from 'react';
import '../Header/Header.css'

function Header(props) {
    return (
        <>
            <div className="header m-5">
                <div className="row">
                <div className="col-2">
                    <div className="logo">
                        <img src="image/logo.jpg" alt="" />
                    </div>
                </div>
                <div className="col-5">
                    <div className="search mx-5 my-2">
                        <form action="">
                        <select class="select-active">
                                    <option>All Categories</option>
                                    <option>Milks and Dairies</option>
                                    <option>Wines & Alcohol</option>
                                    <option>Clothing & Beauty</option>
                                    <option>Pet Foods & Toy</option>
                                    <option>Fast food</option>
                                    <option>Baking material</option>
                                    <option>Vegetables</option>
                                    <option>Fresh Seafood</option>
                                    <option>Noodles & Rice</option>
                                    <option>Ice cream</option>
                                </select>
                                <span className='vr'></span>
                                <input type="text" placeholder="Search for items..." />
                        </form>
                    </div>
                </div>
                <div className="col-5">
                    <div className="right d-flex justify-content-end">
                        <div className="header-icon d-flex">
                            <a href="">                            
                            <img src="image/icon-compare.jpg" alt="" />
                            </a>
                            <a href="#"><span className='lable'>Compare</span></a>
                            {/* <span className='pro-count blue'>3</span> */}
                        </div>
                        <div className="header-icon d-flex">
                        <a href="">                            
                            <img src="image/icon-heart.jpg" alt="" />
                            </a>
                            <a href="#"><span className='lable'>Wishlist</span></a>
                            {/* <span className=' blue'>3</span> */}
                        </div>
                        <div className="header-icon d-flex">
                        <a href="">                            
                            <img src="image/icon-cart.jpg" alt="" />
                            </a>
                            <a href="#"><span className='lable'>cart</span></a>

                            {/* <span className=' blue'>3</span> */}
                        </div>
                        <div className="header-icon d-flex">
                        <a href="">                            
                            <img src="image/icon-user.jpg" alt="" />
                            </a>
                            <a href="#"><span className='lable'>acount</span></a>

                            {/* <span className='blue'>3</span> */}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Header;