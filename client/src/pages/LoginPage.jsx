import React, { useContext, useState } from 'react'
import {arrowIcon} from '../lib/assets';
import AuthContext from '../../context/AuthContextProvider';



const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const {login} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(currentState === "Sign Up" && !isDataSubmitted){
      setIsDataSubmitted(true);
      return;
    }

    login(currentState === "Sign Up" ? 'signup' : 'login', {fullName, email, password, bio});
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-lg'>

      <div className='flex flex-col gap-4 items-center mb-6'>
        <img src="/logo.png" alt="Logo" className='w-[min(30vw, 250px)]'/>
        <span className='text-white text-4xl'>SnappyChat</span>
      </div>

      <form onSubmit={handleSubmit} 
      className='border-2 bg-[#102027] text-white border-gray-500 p-8 flex flex-col gap-6 rounded-lg shadow-lg backdrop-blur-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currentState}
          {isDataSubmitted && (
            <img onClick={() => setIsDataSubmitted(false)} 
            src={arrowIcon} alt="ArrowIcon" className='w-5 cursor-pointer'/>
          )}
        </h2>

        {currentState === "Sign Up" && !isDataSubmitted && (
           <input onChange={(e) => setFullName(e.target.value)} value={fullName} 
           type="text" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300' placeholder='Enter full name' required />
        )}

        {!isDataSubmitted && (
          <>
          <input onChange={(e) => setEmail(e.target.value)} value={email}
          type='email' placeholder='Enter email address' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300'/>

          <input onChange={(e) => setPassword(e.target.value)} value={password}
          type="password" placeholder='Enter password' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300'/>
          </>
        )}

        {currentState === "Sign Up" && isDataSubmitted && (
          <textarea onChange={(e) => setBio(e.target.value)} value={bio} 
          rows={4} className='p-2 resize-none border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300' placeholder='Describe yourself...' required></textarea>
        )}

        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
          {currentState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>

        {currentState === "Sign Up" && (
          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <input type="checkbox"  required/>
            <p>Agree to the terms of use and privacy policy.</p>
          </div>
        )}

        <div className='flex flex-col gap-2'>
          {currentState === "Sign Up" ? (
            <p className='text-sm text-gray-600 text-center'>Already have an account?
              <span onClick={() => {setCurrentState("Login"); setIsDataSubmitted(false)}}
              className='font-medium text-violet-500 cursor-pointer ml-0.5 hover:underline'>Login here</span>
            </p>
          ) : (
            <p className='text-sm text-gray-600 text-center'>New to SnappyChat?
              <span onClick={() => {setCurrentState("Sign Up")}} 
              className='font-medium text-violet-500 cursor-pointer ml-0.5 hover:underline'>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPage