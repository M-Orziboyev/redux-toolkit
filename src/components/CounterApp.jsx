import PlusHandler from "./Buttons/PlusHandler";
import MinuHandler from "./Buttons/MinuHandler";
import Resethandler from "./Buttons/ResetHandler";

const CounterApp = () => {

    return(
        <div className='btn-group'>
            <PlusHandler/>
            <MinuHandler/>
            <Resethandler/>
        </div>
    )
}
export default CounterApp