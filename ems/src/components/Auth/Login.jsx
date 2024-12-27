import React, { useState } from 'react'
const Login = ({handleLogin}) => {
  const [email,setemail] = useState("")
  const [password, setpassword] = useState("")
  const submitHandler=(e) => {
    e.preventDefault()
    handleLogin(email,password)
    setemail("")
    setpassword("")
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center rounded-xl">
        <div className="border-2 p-20 border-emerald-600">
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            action="" className="flex flex-col justify-center items-center">
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                 required 
                 className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl  outline-none bg-transparent placeholder-gray-400" type="email"  
                 placeholder="Enter your email" />

                
                <input 
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                required className="border-2 border-emerald-600 rounded-full mt-3 py-4 px-5 text-xl  outline-none bg-transparent placeholder-gray-400" type="password" placeholder="Enter Password:"/>
                <button className="border-2 border-none bg-emerald-600 rounded-full py-3 px-5 text-xl outline-none  mt-6 " >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login