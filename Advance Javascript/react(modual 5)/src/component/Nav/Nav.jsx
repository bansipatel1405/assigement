import React from 'react';
import '../Nav/nav.css'

function Nav(props) {
    return (
      <>
        <div className="header_wrapper d-flex p-2 stiky-fixed">
            <div className="containers col-2">
                <a href="#">
                  <i className="fa-solid fa-grid-2"></i>
                  <span className='icon-serch'>Browser All  catagaries</span>
                  <i className="fa-solid fa-angle-down ps-2"></i>
                </a>
            </div>
            <nav className="col-8 nav-center mt-2">
              <ul className=' navbar d-flex'>
                
                <li className="navbar-item">
                  <img src="image/icon-hot.png" alt="icon" />
                  <a href="#" className="navbar-link px-2">Deals</a>
                </li>

                <li className="navbar-item dropdown">
                  <a href="#" className="navbar-link">Home
                  <i className="fa-solid fa-angle-down ps-2"></i></a>
                  <ul className="dropdown-content">
                    <li><a href="#">home 1</a></li>
                    <li><a href="#">home 2</a></li>
                    <li><a href="#">home 3</a></li>
                    <li><a href="#">home 4</a></li>
                    <li><a href="#">home 5</a></li>
                    <li><a href="#">home 6</a></li>
                  </ul>
                </li>

                <li className="navbar-item">
                  <a href="#" className="navbar-link">About</a>
                </li>

                <li className="navbar-item">
                  <a href="#" className="navbar-link">Shop
                  <i className="fa-solid fa-angle-down ps-2"></i></a>
                    <ul className="dropdown-content">
                    <li><a href="#">home 1</a></li>
                    <li><a href="#">home 2</a></li>
                    <li><a href="#">home 3</a></li>
                    <li><a href="#">home 4</a></li>
                    <li><a href="#">home 5</a></li>
                    <li><a href="#">home 6</a></li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link">Venders
                  <i className="fa-solid fa-angle-down"></i></a>
                  <ul className="dropdown-content">
                    <li><a href="#">home 1</a></li>
                    <li><a href="#">home 2</a></li>
                    <li><a href="#">home 3</a></li>
                    <li><a href="#">home 4</a></li>
                    <li><a href="#">home 5</a></li>
                    <li><a href="#">home 6</a></li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link">mega menu
                  <i className="fa-solid fa-angle-down"></i></a>
                  <ul className="dropdown-content">
                    <li><a href="#">home 1</a></li>
                    <li><a href="#">home 2</a></li>
                    <li><a href="#">home 3</a></li>
                    <li><a href="#">home 4</a></li>
                    <li><a href="#">home 5</a></li>
                    <li><a href="#">home 6</a></li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link">Blogs
                  <i className="fa-solid fa-angle-down"></i></a>
                  <ul className="dropdown-content">
                    <li><a href="#">home 1</a></li>
                    <li><a href="#">home 2</a></li>
                    <li><a href="#">home 3</a></li>
                    <li><a href="#">home 4</a></li>
                    <li><a href="#">home 5</a></li>
                    <li><a href="#">home 6</a></li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link">Pages
                  <i className="fa-solid fa-angle-down"></i></a>
                  <ul className="dropdown-content">
                    <li><a href="#">home 1</a></li>
                    <li><a href="#">home 2</a></li>
                    <li><a href="#">home 3</a></li>
                    <li><a href="#">home 4</a></li>
                    <li><a href="#">home 5</a></li>
                    <li><a href="#">home 6</a></li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="support-center col-2 d-flex px-4 justify-content-end">
              <img src="image/icon-headphone.png" alt="headphon"/>
              <p><h6>1800 999</h6>
              <span>24/7 support center</span></p>
            </div>
        </div>
      </>
    );
}

export default Nav;