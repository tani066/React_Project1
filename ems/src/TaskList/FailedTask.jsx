/* eslint-disable react/prop-types */
// import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-[400px] bg-green-400 rounded-xl flex-shrink-0 p-5'>
      <div className="flex justify-between items-center"> 
        <h3 className="bg-red-600 px-3 py-1 rounded">{data.category}</h3>
        <h4>{data.date}</h4>
      </div>
      <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>

      <div className='mt-2'>
        <button className='w-full'>Failed</button>
      </div>
    </div>
  )
}

export default FailedTask