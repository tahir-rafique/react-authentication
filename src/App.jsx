import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={'This is our Home Page'} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
        </Routes>



      </Router>
    </>
  )
}

export default App