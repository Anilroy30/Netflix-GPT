import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
            alt="logo"/>
        </div>

        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && <input type="Name" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input type="password" placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? 'New to Netflix? Sign Up' : 'Already registered? Sign In now...'}
            </p>
        </form>
    </div>
  )
}

export default Login