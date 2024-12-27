import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [user, setUser] = useState(null)
  const [userData,setUserData]=useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState("")

  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData=JSON.parse(loggedInUser)
        console.log(userData)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    },[])
  
 

  const handleLogin=(email,password) => {
    if (email=="tani@me.com" && password=="123"){
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e) => email == e.email && e.password == password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
      }
      
    }
    else{
      alert("Invalid Credentials")
    }
  }


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/> : ""}
      {user=="admin" ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null) }
    </div>
  )
}

export default App