import Exercise1 from"./reactExercises/Exercise1"
import {Exercise2Blog} from"./reactExercises/Exercise2Blog"
import UserCard from "./reactExercises/exercise3";

function App(){
    return(
       <>
       
        <Exercise1/>
        <Exercise2Blog/>
        <UserCard

        UserName={"ismail"}
        Email={"ismailmire@gmail.com"}
        
        />

        </>
        
    )
}

export default App;