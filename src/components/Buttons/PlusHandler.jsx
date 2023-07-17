import { useDispatch } from "react-redux";
import { plusHandler } from "../../reducers/countSlice";

const PlusHandler = () => {
    const dispatch = useDispatch();
    return (
        <button className="btn btn-primary" onClick={() => dispatch(plusHandler())}>
            Plus
        </button>
    );
};

export default PlusHandler;
