import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'


export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  function handleChange(ev){
    setFormData({
      ...formData, 
      [ev.target.id]: ev.target.value
    })
  }


  async function handleSubmit(ev){
    ev.preventDefault()
    setLoading(true)

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
      if (data.success === "true") {
        navigate('/create-form')
      }
      
    })


    setLoading(false)


    } catch (error) {
      setLoading(false)
      alert("something went wrong, please try again after sometime")      
    }



    



  }




  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Login</h1>
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

        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Don't have an account?</p>
        <Link to={'/sign-up'}><span className="text-blue-700">Register</span></Link>
      </div>
    </div>
  );
}
