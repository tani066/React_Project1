/* eslint-disable react/prop-types */
// import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'
import HeaderAdmin from '../../others/HeaderAdmin'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-5'>
        {/* <Header changeUser={props.changeUser} data={props.data}/> */}
        <HeaderAdmin changeUser={props.changeUser} data={props.data}/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard