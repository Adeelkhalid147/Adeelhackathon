"use client"

import { ImGoogle } from 'react-icons/im';
import { cartContext } from '@/global/Context';
import { useContext, useEffect, useState } from 'react';



const SignInForm = () => {
    let { signUpViaGoogle, userData, signInUser, loading, errorsOfFirebase} = useContext(cartContext)
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = () => {
    const { email,password } = formData
    signInUser(email,password)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-slate-100 p-8 shadow-lg border-t-8 rounded-xl border-pink-700 ">
        <h2 className="text-2xl mb-4 text-gray-700 font-bold">Sign In</h2>
        
        
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-purple-200 rounded-md px-3 py-2 w-full"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-purple-200 rounded-md px-3 py-2 w-full"
          />
        </div>


        <button
          disabled={loading}
          onClick={handleSignIn}
          className="w-full py-2 rounded bg-purple-500 text-white font-semibold hover:bg-purple-600 focus:ring focus:ring-purple-200"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
