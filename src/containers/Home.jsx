import React from "react";
import { motion } from "framer-motion";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { home, coin } from "../assets";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen items-center gap-10 mx-8 sm:mx-24 my-24 sm:my-0">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="relative w-full sm:w-2/5"
      >
        <img className="w-full" src={home} alt="hero" />
        <motion.img
          className="w-1/5 absolute top-0 right-0"
          whileInView={{ y: [-10, 20, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          src={coin}
          alt="hero"
        />
      </motion.div>
      <div className="flex-1">
        <div>
        <div className="text-3xl sm:text-5xl text-center sm:text-left font-extrabold uppercase mb-8 sm:mb-4 mt-4 sm:mt-0 leading-snug">
          <span>
            Quản lý chi tiêu
            <br /> hiệu quả cùng{" "}
          </span>
          <span className="text-5xl text-sky-500 font-extrabold uppercase leading-snug">
            SMoney
          </span>
        </div>
        <p className="text-xl text-justify">
          Chúng tôi cung cấp công cụ và phương pháp để bạn quản lý dòng tiền của
          bạn một cách dễ dàng và trực quan. Khám phá tiện ích hỗ trợ quản lý
          chi tiêu ngay!
        </p>
        </div>
        <div className="flex justify-center sm:justify-start mt-4 mb-24 sm:mb-0">
          <Link to="/signin">
            <Button variant="contained" endIcon={<ArrowCircleRightIcon />} size="large">
              Trải nghiệm ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
