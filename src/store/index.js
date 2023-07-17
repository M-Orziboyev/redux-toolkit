import { configureStore } from '@reduxjs/toolkit';
import CountReducer from '../reducers/countSlice'

export default configureStore({reducer: CountReducer})