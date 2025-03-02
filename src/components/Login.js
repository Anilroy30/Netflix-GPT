import Header from './Header'
import { useRef, useState } from 'react'
import { checkValidData } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleButtonClick = () => {
        const name = nameRef.current ? nameRef.current.value.trim() : "";
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        const message = checkValidData(name, email, password, isSignInForm);
        setErrorMessage(message);

        if (message) return;

        if(!isSignInForm){
            // Sign Up Form
            createUserWithEmailAndPassword(auth, email, password) ///
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+ errorMessage)
                // ..
            });
        }
        else{
            // Sign In Form
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+ errorMessage)
                console.log(errorCode + " - " + errorMessage);
            });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute p-14 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&<input ref={nameRef} type="text" placeholder="Full Name" className='p-3 my-3 w-full bg-gray-700'/>}
            <input ref={emailRef} type="email" placeholder="Email Address" className='p-3 my-3 w-full bg-gray-700'/>
            <input ref={passwordRef} type="password" placeholder="Password" className='p-3 my-3 w-full bg-gray-700'/>

            {errorMessage && <p className="text-red-500 font-semibold text-sm text-center">{errorMessage}</p>}

            <button onClick={handleButtonClick} className='p-3 my-5 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now.." : "Already Registered? Sign In Now.."}</p>
        </form>
    </div>
  )
}

export default Login