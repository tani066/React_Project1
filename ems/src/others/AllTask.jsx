/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    return (
        <div className="bg-[#1c1c1] p-5 mt-5 rounded h-60 " >
            <div className="text-lg font-medium bg-red-400 mb-2.5 py-2 px-4 flex justify-between rounded font-500" >
                <h2 className="w-1/5">Employee Name</h2>
                <h3 className="w-1/5">New Task</h3>
                <h5 className="w-1/5">Active Task</h5>
                <h5 className="w-1/5 ">Completed</h5>
                <h5 className="w-1/5 ">Failed</h5>
            </div>
            <div className="h-[90%] overflow-auto">
                {userData.map(function (elem,idx) {
                    return <div key={idx} className="border-2 py-3 px-8 border-emerald-900 mb-2.5 flex justify-between rounded-lg font-500" >
                        <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
                        <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskNumbers.newTask}</h3>
                        <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskNumbers.active}</h5>
                        <h5 className="text-lg font-medium w-1/5">{elem.taskNumbers.completed}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskNumbers.failed}</h5>
                    </div>
                })}
            </div>
        </div>
)}

export default AllTask