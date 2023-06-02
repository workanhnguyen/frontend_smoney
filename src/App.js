import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, SignInPage, SignUpPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main pages */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App