import {useState} from "react";
import CounterApp from "./components/CounterApp";

const App = () => {
    const [count, setCount] = useState(0)
    const plusHandler = () => {
        setCount(prev => prev + 1)
    }
    const minusHandler = () => {
        setCount(prev => prev - 1)
    }
    const resethandler = () => {
        setCount(0)
    }
    return (
        <div className="container">
            <h1>Counter: {count}</h1>
            <CounterApp plusHandler={plusHandler} minusHandler={minusHandler} resethandler={resethandler}/>
        </div>
    )
}

export default App