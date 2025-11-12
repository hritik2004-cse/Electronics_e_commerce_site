import React from 'react';
import Logo from '../utils/Logo';
import Navcontents from '../utils/Navcontents';
import Navportion from '../utils/Navportion';

const Navbar = () => {
    return (
        <div className='flex w-full h-[10vh] items-center shadow-lg'>
            <div className="h-full w-[95%] flex justify-between items-center mx-auto p-2">
                <Logo />
                <Navcontents />
                <Navportion />
            </div>
        </div>
    )
}

export default Navbar
