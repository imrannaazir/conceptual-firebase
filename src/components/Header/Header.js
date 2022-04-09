import { faTree } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow-md text-lg'>
            <nav className=' flex justify-between w-[90%] mx-auto py-4 '>
                <h1>
                    <FontAwesomeIcon className='text-4xl' icon={faTree} /></h1>
                <div className='flex gap-4'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='.contacts' >Contacts</Link>
                </div>
                <div >
                    <Link className='mr-4 border-2 rounded-full px-6 py-2 border-sky-400 ' to='/login'>Sign in</Link>
                    <Link className=' bg-sky-400 py-2 px-6 rounded-full text-white' to='signup'>Sign up</Link>
                </div>
            </nav>

        </div>
    );
};

export default Header;