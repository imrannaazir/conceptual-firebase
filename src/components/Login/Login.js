import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

// component body
const Login = () => {
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    //Login with google handle function
    const handleLogInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                navigate('/')
            })
            .catch(error => console.log(error))
    }


    return (
        <div
            className=' w-[90%] lg:w-[30%] mx-auto text-lg text-center shadow-lg rounded-lg py-12 my-10 bg-white flex flex-col gap-6 ' >
            <p
                className=' text-2xl font-bold text-gray-600'>Login Website
            </p>
            {/* log in with email form */}
            <form className='flex flex-col gap-6 ' action="">
                {/* email field */}
                <input
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto' placeholder='Enter email' type="email" name="" id="email" />
                {/* password field */}
                <input
                    className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto' placeholder='Enter password' type="password" name="" id="password" />
                {/*submit button  */}
                <button
                    className='border-2 py-2 w-[350px] mx-auto rounded-md pl-6 bg-sky-400 text-white font-semibold'>Log in
                </button>
            </form>

            {/* OR */}
            <div
                className="flex justify-evenly space-x-2 w-64 mt-4 mx-auto">
                <span
                    className="bg-gray-300 h-px flex-grow t-2 relative top-2">

                </span>
                <span
                    className="flex-none uppercase text-xs text-gray-400 font-semibold">or
                </span>
                <span
                    className="bg-gray-300 h-px flex-grow t-2 relative top-2">

                </span>
            </div>

            {/* log in with google button */}
            <button
                onClick={handleLogInGoogle} className='flex items-center border-2 py-2 w-[350px] mx-auto rounded-md pl-6 gap-8' >
                <img
                    className='w-5' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                Login with Google
            </button>
            <p
                className=' font-normal'>Haven't an account? <Link className=' underline' to='/signup'>Sign up</Link>
            </p>


        </div>


    );
};

export default Login;