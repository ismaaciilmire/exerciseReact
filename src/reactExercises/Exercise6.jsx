import { useState, useEffect } from "react";



const GreetingEfect = () => {
const [title, setTitle] = useState("updated title")
const[Name, setName]= useState("hello")

    useEffect(() => {
        document.title = title
       
    },[title])
    return (
        <div>
            <h2><strong>Enter your Name:</strong></h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <div>
                <h2><strong>CHOOSE A GREETING</strong></h2>
                <input type="text" value={Name} onChange={(e)=> setName(e.target.value)} />
            </div>
        </div>

    )

}

export default GreetingEfect;