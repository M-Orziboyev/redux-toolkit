import {createSlice} from '@reduxjs/toolkit';

export const countSlice = createSlice({
    name: 'count',
    initialState: {count: 0},
    reducers: {
        plusHandler: (state) => {
            state.count += 1;
        },
        minusHandler: (state) => {
            state.count -= 1;
        },
        resetHandler: (state) => {
            state.count = 0;
        }
    }
});
export const { plusHandler, minusHandler, resetHandler} = countSlice.actions
export default countSlice.reducer
