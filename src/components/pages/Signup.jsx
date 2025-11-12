import React from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from "next/link";

const Signup = () => {
    return (
        <div className='flex h-[80vh] w-auto justify-center items-center'>
            <div className="border-2 h-auto md:h-[60vh] border-grey-300 flex justify-center gap-7 items-center p-7 rounded-xl shadow-lg w-auto relative">
                <Image src='/login_img.jpg' alt='a mobile in hand' width='300' height= {800} className='hidden md:block' />
                <div className="h-auto">
                    <h1 className='text-2xl font-bold p-1 text-center'>Create an Account</h1>
                    <p className='text-lg text-center text-gray-500 pb-3'>please enter your details below.</p>
                    <form action="" className='flex flex-col justify-center items-center gap-4'>
                        <Input 
                        placeholder='username' 
                        className='border-b-2 border-b-grey-300 w-full' 
                        type='text'
                        required={true}/>
                        <Input 
                        placeholder='email' 
                        className='border-b-2 border-b-grey-300 w-full'
                        type='email'
                        required={true} />
                        <Input 
                        placeholder='password' 
                        className='border-b-2 border-b-grey-300 w-full'
                        required={true} 
                        maxLength='8'/>
                        <Button 
                        className='w-full cursor-pointer bg-sky-800'
                        type='submit'>
                            Create Account
                        </Button>
                    </form>
                    <p className='pt-4 text-lg text-center text-gray-500'>Already have an Account? <Link href="/login" className='text-sky-700 checked:text-blue-500'>LogIn</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup
