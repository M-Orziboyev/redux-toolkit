import { useDispatch } from "react-redux"
import { countSlice, resetHandler } from "../../reducers/countSlice"

const Resethandler = () => {
    const dispatch = useDispatch()

    return(
        <button className='btn btn-danger' onClick={() => dispatch(resetHandler())}>Reset</button>
    )
}
export default Resethandler