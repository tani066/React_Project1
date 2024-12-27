/* eslint-disable react/prop-types */
// import React from 'react'

const AcceptTask = ({data}) => {
  console.log()
  return (
    <div className='h-full w-[400px] bg-blue-400 rounded-xl flex-shrink-0 p-5'>
        <div className="flex justify-between items-center"> 
            <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
            <h4>{data.date}</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>

        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
  </div>
  
  )
}

export default AcceptTask