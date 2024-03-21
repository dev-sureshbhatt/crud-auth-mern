import React, { useState } from "react";
import {Link} from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({})

  function handleChange(ev){
    setFormData({
      ...formData, 
      [ev.target.id]: ev.target.value
    })
  }


  async function handleSubmit(ev){
    ev.preventDefault()

    try {
    
      const sendData = await fetch('http://localhost:4000/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    sendData.json().then((data)=>{
      alert(data.msg)
    })


    } catch (error) {
console.log(error)      
    }



    



  }




  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          Login
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Don't have an account?</p>
        <Link to={'/sign-up'}><span className="text-blue-700">Register</span></Link>
      </div>
    </div>
  );
}
