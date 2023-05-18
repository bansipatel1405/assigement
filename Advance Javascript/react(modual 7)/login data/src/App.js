import logo from './logo.svg';
import Read from './component/Read';
import './App.css';
import Create from './component/Create';
import { Route, Routes } from 'react-router-dom';
import Edit from './component/Edit';

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route exact path='/' element = {<Read/>}/>
          <Route exact path='/Create' element = {<Create/>}/>
          <Route exact path='/edit' element = {<Edit/>}/>


        </Routes>
      </div>
    </>
  );
}

export default App;
