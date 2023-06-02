import React from 'react';

import { BottomNav, Navbar } from '../components';

const HomePage = () => {
  return (
    <div className='relative h-screen'>
        <Navbar />
        <BottomNav />
    </div>
  )
}

export default HomePage