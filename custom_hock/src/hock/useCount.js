import { useState } from 'react';

const useCounter = (defultValue = 1, uperLimit = 10, lowerLimit = 1) => {
    const [counter, setCounter] = useState(defultValue)

    const handleInc = () => {
        if (counter < uperLimit) {
            setCounter(counter + 1)
        }
    }
    const handleDec = () => {
        if (counter > lowerLimit) {
            setCounter(counter - 1)
        }
    }
    return{
        counter,
        handleInc,
        handleDec
    }
};

export default useCounter;