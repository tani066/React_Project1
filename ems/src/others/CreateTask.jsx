import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthProvider"

// import React from 'react'

const CreateTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    const [title, setTaskTitle] = useState("")
    const [description, setTaskDescription] = useState("")
    const [date, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setNewTask({title,description,date,category,active:false,newTask:true,completed:false,failed:false})
        const data = userData
        data.forEach(function(elem){
            if(assignTo==elem.firstName){
                elem.tasks.push(newTask)
                elem.taskNumbers.newTask=elem.taskNumbers.newTask+1
            }
        })
        setUserData(data)
        console.log(data)

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }
  return (
    <div className="p-10 bg-[#1c1c1c] mt-7 rounded">
    <form onSubmit={(e) => {
        submitHandler(e)
    }} action="" className="flex items-start justify-between w-full flex-wrap">

        <div className="w-1/2">
            <div>
                <h3 className="text-gray-300 mb-0.5">Task Tittle</h3>
                <input 
                value={title}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }}
                className="py-1 px-2 w-4/5 rounded outline-none bg-transparent text-sm border-gray-400 mb-4" type="text" placeholder="Make a UI Design..." />
            </div>
            <div> 
                <h3 className="text-gray-300 mb-0.5">Date</h3>
                <input 
                value={date}
                onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}
                className="py-1 px-2 w-4/5 rounded outline-none bg-transparent text-sm border-gray-400 mb-4" type="date" />
            </div>

            <div> 
                <h3 className="text-gray-300 mb-0.5">Asign to</h3>
                <input 
                value={assignTo}
                onChange={(e)=>{
                    setAssignTo(e.target.value)
                }}
                className="py-1 px-2 w-4/5 rounded outline-none bg-transparent text-sm border-gray-400 mb-4" type="text" placeholder="employee text..." />
            </div>

            <div>
                <h3 className="text-gray-300 mb-0.5">Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
                className="py-1 px-2 w-4/5 rounded outline-none bg-transparent text-sm border-gray-400 mb-4" type="text" placeholder="design,dev,etc.." />
            </div>

                
        </div>


        <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-gray-300 mb-0.5">Description</h3>
            <textarea 
            value={description}
            onChange={(e)=>{
                setTaskDescription(e.target.value)
            }}
            className="w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded mt-4 w-full">Create Task</button>
            
        </div>
        





        
    </form>
</div>
  )
}

export default CreateTask