import Exercise1 from "./reactExercises/Exercise1"
import { Exercise2Blog } from "./reactExercises/Exercise2Blog"
import UserCard from "./reactExercises/exercise3";
import Exercise4 from"./reactExercises/Exercise4"
import { useState } from "react";



function App() {

   const [isVisible,setIsVisible] = useState(true)

   const togable=()=>{
    setIsVisible(!isVisible)
   }

return (
    <>

        <Exercise1 />
        <Exercise4/>
        <Exercise2Blog />
        <UserCard
            UserName={"ismail"}
            Email={"ismailmire2@gmail.com"}
        />
        <button onClick={togable}>{isVisible?'hide':'show'}turn</button>
        {isVisible && <p>the button is</p>}
        
    </>

)
}

export default App;