import { signIn } from '../auth'
import React from 'react'

function Login() {

  async function login() {
    "use server"
   await signIn("google",{redirectTo:'/contactus'})
    
}
  return (
    <>
    <h1>Login head</h1>

  
    <form action={login}>
      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-20">SignIn</button>
      </form>
        </>
  )
}

export default Login