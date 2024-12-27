// import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
        <div className="flex mt-10 justify-between screen gap-5">
            <div className="py-20 px-9 rounded-xl w-[45%] bg-yellow-300">
                <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
                <h3 className="text-xl font-medium"> New Task</h3>
            </div>
    
            <div className="py-20 px-9 rounded-xl w-[45%] bg-blue-400">
                <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
                <h3 className="text-xl font-medium">Completed Tasks</h3>
            </div>
    
            <div className="py-20 px-9 rounded-xl w-[45%] bg-green-400">
                <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
                <h3 className="text-xl font-medium">Accepted Task</h3>
            </div>
    
            <div className="py-20 px-9 rounded-xl w-[45%] bg-red-400">
                <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
                <h3 className="text-xl font-medium"> Failed Task</h3>
            </div>
        </div>
      )
}

export default TaskListNumbers