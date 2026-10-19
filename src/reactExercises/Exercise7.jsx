import { useState,useEffect } from "react"

const MouseMove=()=>{
    const [coords, setcoords] = useState({x:0, y:0})

    useEffect(()=>{
        const mouseHandle=(e)=>{
        setcoords({x: e.clientX, y: e.clientY})

        };
        window.addEventListener("mousemove",mouseHandle)

        return()=>{
            window.removeEventListener("mousemove",mouseHandle)
        };
        
        
    },[])

    return(
        <div>
            <p>Mouse X:{coords.x}</p>
            <p>Mouse Y:{coords.y}</p>
        </div>

    )
}

export default MouseMove;