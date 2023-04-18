import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import State from './State';
  import Darkmode from './Darkmode';
  import Ref from './Ref';
  import Api from '../function/01Api';
  import Login from '../function/Login';
  import Signup from '../function/Signup'
  import List from '../function/List';
  
function header(props) {
    const Menudata = {"/State":"State","/Darkmode":"Darkmode","/Ref":"Ref","/Api":"Api","/Login":"Login","/Signup":"Signup","/List":"List"}

        const Alldata = Object.entries(Menudata).map((res,i)=>{
        console.log(res);
        return <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
      </li>
    })
    return (
        <>
            <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     {Alldata}

      
    </ul>

  </div>
</nav>
         <Routes>
            <Route path='State' element = {<State/>}/>
            <Route path='Darkmode' element = {<Darkmode/>}/>
            <Route path='Ref' element={<Ref/>}/>
            <Route path='Api' element={<Api/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Signup' element={<Signup/>}/>
            <Route path='List' element={<List/>}/>



         </Routes>

            </Router>

        </>
    );
}

export default header;