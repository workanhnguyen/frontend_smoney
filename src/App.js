import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, SignInPage, SignUpPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App