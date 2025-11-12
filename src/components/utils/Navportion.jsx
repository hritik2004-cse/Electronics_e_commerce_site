import React from 'react';
import Search from '../utils/Search';
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip"

const Navportion = () => {
    return (
        <div className='flex justify-between items-center h-full w-[70%] md:w-[30%]'>
            <Search />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <IoIosHeartEmpty className='text-2xl cursor-pointer hover:text-primary transition-colors' />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Wishlist</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <RiShoppingCartLine className='text-2xl cursor-pointer hover:text-primary transition-colors' />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Shopping Cart</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

export default Navportion
