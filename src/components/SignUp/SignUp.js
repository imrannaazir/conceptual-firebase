import React from 'react';
import app from '../../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { f1a0 } from '@fortawesome/free-solid-svg-icons';
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const SignUp = () => {
    const handleSigninGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => console.log(result))
            .catch(error => console.log(error))

    }



    return (
        <div className=' w-[90%] lg:w-[50%] mx-auto text-lg text-center' >
            <p>Join Website</p>
            <input className=' border-2 py-2 w-[350px] rounded-md pl-6' placeholder='Enter email' type="email" name="" id="" />

            <button className='flex items-center border-2 py-2 w-[350px] mx-auto rounded-md pl-6 gap-8' onClick={handleSigninGoogle}>
                <img className='w-5' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                Continue with Google</button>
        </div>
    );
};

export default SignUp;