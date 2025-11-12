import React from 'react';
import { Input } from '../ui/input';
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className='h-full w-[80%] rounded-md p-2 flex justify-between items-center bg-[#e7e7e7]'>
            <Input placeholder='What are you looking for?' className='w-[90%] text-md h-full border-none outline-none' type='search'/>
            <CiSearch className='w-[10%] h-full text-foreground cursor-pointer'/>
        </div>
    )
}

export default Search
