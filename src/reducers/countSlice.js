import {createSlice} from '@reduxjs/toolkit';

export const reducer = createSlice({
    name: 'count',
    initialState: {count: 0},
    reducers: {
        plusHandler: (state, payload) => {
            state.count += 1;
        },
        minusHandler: (state, payload) => {
            state.count -= 1;
        }
        resetHandler: (state, payload) => {
            state.count = 0;
        }
    }
});
export const { plusHandler, minusHandler, resetHandler} = countSlice.actions
export default countSlice.reducer
