
import { useState } from "react"

const Exercise12 = () => {
  const [count,seCount] = useState(0)
  

  const handleIncreement=()=>{
    seCount(count + 1)
   
  }

  const handleDecreement=()=>{
    if(count >0) seCount(count - 1)
    
    
  }
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleIncreement}>increement</button>
      <button disabled={count == 0} onClick={handleDecreement}>deCreement</button>
      
      
    </div>
  )
}

export default Exercise12
