import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className=' w-[90%] lg:w-[30%] mx-auto text-lg text-center shadow-lg rounded-lg py-12 my-10 bg-white flex flex-col gap-6 ' >
            <p className=' text-2xl font-bold text-gray-600'>Login Website</p>
            <input className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto' placeholder='Enter email' type="email" name="" id="" />
            <input className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto' placeholder='Enter password' type="password" name="" id="" />
            <button className='border-2 py-2 w-[350px] mx-auto rounded-md pl-6 bg-sky-400 text-white font-semibold'>Log in</button>

            <p>OR</p>

            <button className='flex items-center border-2 py-2 w-[350px] mx-auto rounded-md pl-6 gap-8' >
                <img className='w-5' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                Continue with Google</button>
            <p className=' font-normal'>Haven't an account? <Link className=' underline' to='/signup'>Sign up</Link></p>


        </div>
    );
};

export default Login;