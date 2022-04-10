import { faTree, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';

//component body
const Header = () => {
    const [user, setUser] = useState({})

    //manage user data
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
    }, [])

    //handle log out function    
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .catch((error) => {
                setUser({})

            });
    }

    return (
        <div
            className='shadow-md text-lg'>
            {/*navbar start  */}
            <nav
                className=' flex justify-between w-[90%] mx-auto py-4 '>
                {/*logo  */}
                <h1>
                    <FontAwesomeIcon className='text-4xl' icon={faTree} />
                </h1>
                {/* navigation link */}
                <div
                    className='flex gap-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='.contacts' >Contacts</Link>
                </div>

                {/* sign up/in or profile/sign out button  */}
                {
                    user.uid ?
                        <div
                            className='flex gap-3'>
                            <img
                                className=' rounded-full w-12' src={user.photoURL} alt=""
                            />
                            <button
                                onClick={handleLogOut}>Log out <FontAwesomeIcon icon={faRightFromBracket} />
                            </button>
                        </div>
                        :
                        <div >
                            <Link
                                className='mr-4 border-2 rounded-full px-6 py-2 border-sky-400 ' to='/login'>Sign in
                            </Link>
                            <Link
                                className=' bg-sky-400 py-2 px-6 rounded-full text-white' to='signup'>Sign up
                            </Link>
                        </div>}
            </nav>

        </div>
    );
};

export default Header;