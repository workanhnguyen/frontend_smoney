import React from 'react';

import { BottomNav, Navbar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { Home, Services, About, Contact } from '../containers';

const LandingPage = () => {
  const { navItemClicked } = useStateContext();
  return (
    <div className='relative h-screen'>
        <Navbar />
        <div>
          {navItemClicked.home && <Home />}
          {navItemClicked.services && <Services />}
          {navItemClicked.about && <About />}
          {navItemClicked.contact && <Contact />}
        </div>
        <BottomNav />
    </div>
  )
}

export default LandingPage