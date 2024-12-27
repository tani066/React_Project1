// import React from 'react'

const HeaderAdmin = (props) => {
    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser',"")
        // eslint-disable-next-line react/prop-types
        props.changeUser('')
        // window.location.reload()
      }
      return (
        <div className="flex justify-between items-end">
            <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">Hello Admin 👋</span></h1>
            <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded">Log Out</button>
    
        </div>
)}

export default HeaderAdmin