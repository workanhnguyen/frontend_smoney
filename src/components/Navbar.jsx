import React from "react";
import { AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../assets";

const Navbar = () => {
  return (
    <AppBar color="transparent">
      <div className="flex justify-between dark:bg-main-dark-bg">
        <Link to="/" className="flex items-center gap-2 py-2 ml-8">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-2xl hidden sm:block">SMoney</span>
        </Link>

        <div className="flex items-center mr-8 gap-4">
          <Link to="/signin">
            <Button variant="outlined">Đăng nhập</Button>
          </Link>
          <Link to="/signup">
            <Button variant="contained">Đăng ký</Button>
          </Link>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
