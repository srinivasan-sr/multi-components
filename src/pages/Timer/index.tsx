import { useState, useEffect } from "react";
export const Timer = () => {
    const [remainingTime, setRemainingTime] = useState<number>(0);
    useEffect(() => {
        let interval: number | undefined;
        if(remainingTime > 0){
            interval = setInterval(() => setRemainingTime(remainingTime - 1000), 1000);
        } else if(remainingTime === 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [remainingTime]);

    const handleReset = () => setRemainingTime(0);

    const displayFormattedTime = () => {
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000)/1000);
        return `${minutes ? minutes + ':' : ''}${seconds.toString().padStart(2,'0')}`;
    }
    return <>
        <div id="countdown-timer" className="my-2">
            <input type="number" className="p-1" placeholder="Set duration (minutes or seconds)" 
            onChange={(e) => setRemainingTime(parseInt(e.currentTarget.value) * 60000)}/>
            <button type="button" onClick={handleReset} className="border rounded p-2 ml-2">Reset</button>
            <br/>
            <p>{displayFormattedTime()}</p>
        </div>
    </>
}