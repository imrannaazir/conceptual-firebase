import React from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
const googleProvider = new GoogleAuthProvider()


//component start
const SignUp = () => {
    const navigate = useNavigate()

    //handle sign in with google start    
    const handleSignInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    // handle form submit sign up    
    const handleEmailSignUp = event => {
        event.preventDefault()
        const username = event.target.username.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, username, password);

        //create account with email and password auth function
        createUserWithEmailAndPassword(auth, username, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                console.log(errorCode);
                // ..
            });
        console.log('email from the other hand', email);

    }

    return (
        <div>
            {/* sign up form started */}
            <div
                className=' w-[90%] lg:w-[30%] mx-auto text-lg text-center shadow-lg rounded-lg py-12 my-10 bg-white flex flex-col gap-6 ' >
                <p
                    className=' text-2xl font-bold text-gray-600'>Join Website
                </p>
                {/* create account with email form */}
                <form onSubmit={handleEmailSignUp} className='flex flex-col gap-6' action="">
                    {/* username field */}
                    <input
                        className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto' placeholder='Create username' type="text" name="username" id="username" />
                    {/* email field */}
                    <input
                        className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto' placeholder='Create email' type="text" name="email" id="email" />
                    {/* password field */}
                    <input
                        className=' border-2 py-2 w-[350px] rounded-md pl-6 block mx-auto' placeholder='Create password' type="password" name="password" id="password" />
                    {/* submit button */}

                    <button type="submit" name="button"
                        className='border-2 py-2 w-[350px] mx-auto rounded-md pl-6 bg-sky-400 text-white font-semibold'>Continue
                    </button>
                </form>

                {/* OR */}
                <div className="flex justify-evenly space-x-2 w-64 mt-4 mx-auto">
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

                {/* sign up with google */}
                <button
                    className='flex items-center border-2 py-2 w-[350px] mx-auto rounded-md pl-6 gap-8' onClick={handleSignInGoogle}>
                    <img
                        className='w-5' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                    Continue with Google</button>
                <p
                    className=' font-normal'>Already a member?
                    <Link className=' underline' to='/login'>Login</Link>
                </p>
            </div>

        </div>
    );
};

export default SignUp;