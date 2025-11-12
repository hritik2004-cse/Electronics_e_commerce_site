import React from 'react';
import { Button } from '../ui/button';

const Heading = ({ children }) => {
    return (
        <div className='flex w-full items-center justify-between pb-7'>
            <div className="capitalize text-xl font-semibold text-foreground">
                {children}
            </div>
            <Button className='capitalize text-md'>
                view all
            </Button>
        </div>
    )
}

export default Heading
