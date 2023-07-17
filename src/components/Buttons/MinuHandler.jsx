import { useDispatch } from "react-redux"
import { countSlice, minusHandler } from "../../reducers/countSlice"

const MinusHandler = () => {
    const dispatch = useDispatch()
    return(
        <button className='btn btn-secondary' onClick={() => dispatch(minusHandler())}>Minus</button>
    )
}
export default MinusHandler