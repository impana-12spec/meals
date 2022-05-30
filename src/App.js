import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import SearchingPage from './SearchingPage'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
   <>
   <div>
     <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/SearchingPage' element={<SearchingPage/>} />
     </Routes>
     
       </Router>
   </div>
   </>
  )
}

export default App

