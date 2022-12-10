
import useCounter from './hock/useCount';

const App = () => {

    const {counter,handleInc,handleDec} = useCounter();
    const{counter:count, handleInc:incriment, handleDec:dicrement}=useCounter(5,15,3)


    return (
        <div>
            <h1>Counter App</h1>
            <div>
                <button style={{ margin: "1rem", padding: "1rem" }} onClick={handleInc}>+</button>
                <h1 style={{ margin: "2rem", display: "inline-block" }}>{counter}</h1>
                <button style={{ margin: "1rem", padding: "1rem" }} onClick={handleDec}>-</button>
            </div>
            <div>
                <button style={{ margin: "1rem", padding: "1rem" }} onClick={incriment}>+</button>
                <h1 style={{ margin: "2rem", display: "inline-block" }}>{count}</h1>
                <button style={{ margin: "1rem", padding: "1rem" }} onClick={dicrement}>-</button>
            </div>
        </div>
    );
};

export default App;