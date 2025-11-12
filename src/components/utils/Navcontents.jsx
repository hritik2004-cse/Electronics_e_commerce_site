import React from 'react';
import { navContents } from '../../data/navcontent';

const Navcontents = () => {
  return (
    <div className='hidden md:flex justify-between items-center w-[40%] lg:w-[30%] gap-2 h-full'>
      {navContents.map((data,index) => {
        return(
          <a href={data.path} key={index} className={`active:text-decoration-line capitalize text-lg text-foreground`}>{data.name}</a>
        )
      })}
    </div>
  )
}

export default Navcontents
