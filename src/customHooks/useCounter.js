import React, {useState, useEffect} from 'react'

export const useCounter = (type) => {

    // const [counter, setCounter] = useState(0);


    // const positiveInterval = () => {
    //     setInterval(() => {
    //         setCounter((prevState) => prevState + 1);
    //     }, 1000) 
    //     return clearInterval(interval);
    // }

    // const negativeInterval = () => {
    //     setInterval(() => {
    //         setCounter((prevState) => prevState - 1);
    //     }, 1000) 
    //     return clearInterval(interval);
    // }

    // let interval = () => {

    // }

    // if (type === "+") {
    //     interval = positiveInterval
    // } else if (type === "-") {
    //     interval = negativeInterval
    // }

    // useEffect(() =>{
    //     interval()
    //     return () => clearInterval(interval)
    // }, [counter,type ])
  

      // const [counter, setCounter] = useState(0);
  const [counter] = useCounter("+")

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const counterType = (type) => {
      
    }

    

    return [counter]
}
