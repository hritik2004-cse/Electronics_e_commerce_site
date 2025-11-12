import React from 'react';
import Navbar from './Navbar';
import Search from '../utils/Search';

const Mainnav = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="h-[7vh] flex lg:hidden bg-black">
        <Search />
      </div>
    </div>
  )
}

export default Mainnav
