import { useRef, useState } from "react"


const Clock = () => {
    const [time, setTime] = useState<string>()
    const intervalRef = useRef<NodeJS.Timer | null>();

    const startClock = () => {
        intervalRef.current = setInterval(() => {
            setTime(new Date().toISOString())
        },1000)
    }

    const stopClock = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    return (
        <div>
            {time && time}
            <button onClick={startClock}>
                Start
            </button>
            <button onClick={stopClock}>
                Stop
            </button>
        </div>
    )
}


export default Clock