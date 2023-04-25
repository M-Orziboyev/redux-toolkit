import PlusHandler from "./Buttons/PlusHandler";
import MinuHandler from "./Buttons/MinuHandler";
import Resethandler from "./Buttons/ResetHandler";

const CounterApp = ({plusHandler,minusHandler,resethandler}) => {
    return(
        <div className='btn-group'>
            <PlusHandler plusHandler={plusHandler}/>
            <MinuHandler minusHandler={minusHandler}/>
            <Resethandler resethandler={resethandler}/>
        </div>
    )
}
export default CounterApp