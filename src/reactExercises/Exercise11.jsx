import { useState } from "react"

const loginForm = () => {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [isloggedIN,setIsLoggedIn] = useState(false)

    const handleLogin=(event)=>{
      event.preventDefault();
      if(userName && password){
        setIsLoggedIn(true)
   
      }
    }
    const handleLogOut=()=>{
      userName ('');
      password('');
      setIsLoggedIn(false)
    }

    if(isloggedIN){
      
      return(
        <div>
       <h2>welocome {userName}!</h2>
      <button onClick={handleLogOut}>logOut</button>
      </div>

      )
    }
  return (
    <div>

       <form onSubmit={handleLogin}>
         <h1>login</h1>
        <label id="usename">UserName:</label>
        <input type="text" id="name"  value={userName} 
        onChange={(e)=>setUserName(e.target.value) } /> <br />
        <label id="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/> <br />
        <button type="submit">login</button>
      

       </form>
    </div>
  )
}

export default loginForm
