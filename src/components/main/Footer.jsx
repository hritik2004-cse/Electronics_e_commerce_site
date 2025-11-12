import React from 'react';
import Newsletter from './Newsletter';
import { currentYear } from '../../data/year';
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-primary absolute bottom-0'>
      <div className=""></div>
      <hr />
      <div className="p-4 flex items-center justify-center ">
        <h2 className="text-secondary capitalize text-lg flex gap-2 items-center justify-center">
          &copy; copyright {currentYear}, made with <FaHeart className='text-red-500' /> by hritik sharma
        </h2>
      </div>
    </div>
  )
}

export default Footer
