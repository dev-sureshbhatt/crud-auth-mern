import React, { useState } from "react";
import {Link} from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({})

  function handleChange(ev){
    setFormData({
      ...formData, 
      [ev.target.id]: ev.target.value
    })
  }


  async function handleSubmit(ev){
    ev.preventDefault()
    console.log("sending fetch request")
    const sendData = await fetch('http://localhost:4000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }




  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="focus:outline-none border p-3 rounded-lg"
          required
          type="text"
          placeholder="Display Name"
          id="displayName"
          onChange={handleChange}
        />
        <input
          className="focus:outline-none border p-3 rounded-lg"
          required
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="focus:outline-none border p-3 rounded-lg"
          required
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Register
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <Link to={'/sign-in'}><span className="text-blue-700">Sign in</span></Link>
      </div>
    </div>
  );
}
