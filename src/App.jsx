import Exercise1 from "./reactExercises/Exercise1"
import { Exercise2Blog } from "./reactExercises/Exercise2Blog"
import UserCard from "./reactExercises/exercise3";
import Exercise4 from"./reactExercises/Exercise4"
import Exercise5 from"./reactExercises/Exercise5"
import Exercise6 from "./reactExercises/Exercise6"
import Exercise7 from "./reactExercises/Exercise7"
import Exercise8 from "./reactExercises/Exercise8"
import { useState } from "react";




function App() {

   const [isVisible,setIsVisible] = useState(true)
  

   const togable=()=>{
    setIsVisible(!isVisible)
   }


return (
    <>
        <Exercise8/>
        <Exercise7/>
        <Exercise6/>
        <Exercise5/>
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