import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialNavbarState = {
  home: false,
  services: false,
  about: false,
  contact: false,
};

export const ContextProvider = ({ children }) => {
  const [navItemClicked, setNavItemClicked] = useState(initialNavbarState);

  const handleNavbarChange = (itemClicked) => setNavItemClicked({ ...initialNavbarState, [itemClicked]: true });

  return (
    <StateContext.Provider
      value={{
        navItemClicked,
        handleNavbarChange,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () =>  useContext(StateContext);
