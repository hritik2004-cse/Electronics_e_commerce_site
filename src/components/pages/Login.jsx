import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from "next/link";

const Login = () => {
    return (
        <div className='flex h-[80vh] w-auto justify-center items-center'>
            <div className="border-2 h-auto md:h-[60vh] border-grey-300 flex justify-center gap-7 items-center p-7 rounded-xl shadow-lg w-auto relative">
                <Image src='/login_img.jpg' alt='a mobile in hand' width='300' height={800} className='hidden md:block' />
                <div className="h-auto">
                    <h1 className='text-2xl font-bold p-1 text-center'>Login</h1>
                    <p className='text-lg text-center text-gray-500 pb-3'>please enter your details below.</p>
                    <form action="" className='flex flex-col justify-center items-center gap-4'>
                        <Input
                            placeholder='email'
                            type='email'
                            className='border-b-2 border-b-grey-300 w-full'
                            required={true} />
                        <Input
                            placeholder='password'
                            className='border-b-2 border-b-grey-300 w-full'
                            type='password'
                            required={true}
                            maxLength='8' />
                        <div className="relative w-full h-[3vh]">
                            <Link href='/forget' className=" capitalize text-sky-800 font-semibold absolute text-md right-0">forget password</Link>
                        </div>
                        <Button
                            className='w-full cursor-pointer bg-sky-800'
                            type='submit'>
                            Login
                        </Button>
                    </form>
                    <p className='pt-4 text-lg text-center text-gray-500'>Don&apos;t have an Account? <Link href="/signup" className='text-sky-700 checked:text-blue-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login
