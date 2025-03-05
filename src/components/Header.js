import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'


const Header = () => {
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const user = useSelector(store => store.user)

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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

  const handleLanguageChange = (e) => {
    disPatch(changeLanguage(e.target.value))
  }


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />

      {user && <div className='p-2 flex justify-between'>
        {showGptSearch && <select className='p-3 m-3 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))}
        </select>}
          <button onClick={handleGPTSearchClick} className='mr-10 py-2 px-4 m-4 bg-violet-800 rounded-lg text-white'>
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
        <div>
          <img className='w-12 h-12' src={user?.photoURL} alt="User Icon"/>
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>
      </div>}
    </div>
  )
}

export default Header;