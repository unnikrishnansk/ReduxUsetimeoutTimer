import {useState , useEffect} from 'react';

const useTimeout = () => {
  
    const [stopwatch, setstopwatch] = useState(0);
    const [stopwatchOn, setstopwatchOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if(stopwatchOn)
        {
           interval = setInterval(() => {
                setstopwatch((prev) => prev+10);
            }, 10);
        }
        else{
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [stopwatchOn])
    
  return stopwatch,stopwatchOn;
}

export default useTimeout;
