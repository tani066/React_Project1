/* eslint-disable react/prop-types */


const Header = (props) => {
  // const [userName, setUserName] = useState("")
  
  // if(!data){
  //   setUserName('Admin')
  // }
  // else{
  //   setUserName(data.firstName)
  // }
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser',"")
    props.changeUser('')
    // window.location.reload()
  }
  console.log(props)
  console.log(props)
  return (
    <div className="flex justify-between items-end">
        <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">{props.data.firstName} 👋</span></h1>
        <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded">Log Out</button>

    </div>
  )
}

export default Header