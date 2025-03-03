import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'


const Header = () => {
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL} = user;
        disPatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        disPatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    disPatch(toggleGptSearchView())
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {user && <div className='p-2 flex'>
          <button onClick={handleGPTSearchClick} className='mr-10 py-2 px-4 m-4 bg-violet-800 rounded-lg text-white'>GPT Search</button>
        <div>
          <img className='w-12 h-12' src={user?.photoURL} alt="User Icon"/>
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>
      </div>}
    </div>
  )
}

export default Header;