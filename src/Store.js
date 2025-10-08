import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slice'

export default configureStore({
  reducer: {
    redu : counterSlice,
  },
})