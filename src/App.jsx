import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import ProtectedRoute from './components/Protected/ProtectedRoute';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route element={<ProtectedRoute />} >
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route path='/' element={'This is our Home Page'} />
          <Route path='/login' element={<Login />} />
        </Routes>



      </Router>
    </>
  )
}

export default App