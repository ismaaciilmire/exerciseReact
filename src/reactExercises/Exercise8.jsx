
import { useState, useEffect } from "react"

const Exercise8 = () => {

    const [initialTime,setInitialTime] = useState(30);
    const [TimeLeft, setTimeLeft] = useState(30);
    const [isRuning, setIsRuning] = useState(false);
    useEffect(() => {
        let timeId;

        if (isRuning && TimeLeft > 0) {
            timeId = setInterval(() => {
                setTimeLeft((prev) => prev - 1)


            }, 1000)

        }
        return () => clearInterval(timeId)
    }, [isRuning, TimeLeft])

    const handleStart = () => {
        if (TimeLeft > 0) {
            setIsRuning(true)

        }

    };

    const handleStop = () => {
        setIsRuning(false)
    };

    const handleReset = () => {
        setIsRuning(false)
        setTimeLeft(initialTime)
    };

    const handleInputChange=((e)=>{
        const value =number(e.target.value);
        setInitialTime(value);
        setTimeLeft(value);
        setIsRuning(false)

    })
    return (
       <div>
        <h2>countDown Timer</h2>
        <label> set time (seconds):</label>
        <input type="number"
        value={initialTime} 
        onChange={handleInputChange}/>
        <p>time left: {TimeLeft} seconds</p>
        <button onClick={handleStart} disabled={isRuning || TimeLeft === 0}>start</button>
        <button onClick={handleStop} disabled={!isRuning}>stop</button>
        <button onClick={handleReset}>reset</button>
       </div>
    )
}

export default Exercise8
