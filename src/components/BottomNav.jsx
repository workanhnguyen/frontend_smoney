import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ExtensionIcon from "@mui/icons-material/Extension";
import InfoIcon from "@mui/icons-material/Info";

import { useStateContext } from "../contexts/ContextProvider";

export default function SimpleBottomNavigation() {
  const { navItemClicked, handleNavbarChange } = useStateContext();

  useEffect(() => {
    handleNavbarChange('home');
  }, []);

  return (
    <BottomNavigation
      showLabels={window.innerWidth > 500 ? true : false}
      value={navItemClicked}
      onChange={(event, newValue) => {
        handleNavbarChange(newValue);
      }}
      className="absolute left-0 right-0 bottom-0"
    >
      <BottomNavigationAction 
        value="home" 
        label="Home" 
        icon={<HomeIcon />}
        sx={{ color: `${navItemClicked['home'] === true ? '#1976d2' : ''}`}}
      />
      <BottomNavigationAction
        value="services"
        label="Services"
        icon={<MiscellaneousServicesIcon />}
        sx={{ color: `${navItemClicked['services'] === true ? '#1976d2' : ''}`}}
      />
      <BottomNavigationAction
        value="about"
        label="About"
        icon={<ExtensionIcon />}
        sx={{ color: `${navItemClicked['about'] === true ? '#1976d2' : ''}`}}
      />
      <BottomNavigationAction
        value="contact"
        label="Contact"
        icon={<InfoIcon />}
        sx={{ color: `${navItemClicked['contact'] === true ? '#1976d2' : ''}`}}
      />
    </BottomNavigation>
  );
}
