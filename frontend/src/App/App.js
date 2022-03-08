import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "../style.css"

// Pages imports
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import DashBoard from '../Pages/Dashboard/Dashboard';
import History from '../Pages/History/History';

// Hooks imports
import { useColorBody } from '../hooks'


function App() {
  
  useColorBody()
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashBoard' element={<DashBoard />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;