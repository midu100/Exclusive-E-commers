import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    cartValue : JSON.parse(localStorage.getItem('Cart')) || null
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
        if(state.value > 0){
            state.value -= 1
        }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addTocart: (state, action) => {
      state.cartValue = action.payload
    },
    removeCart: (state, action) => {
      state.cartValue =state.cartValue.filter((item)=>{item !== action.payload}) 
      localStorage.setItem('Cart',JSON.stringify(state.cartValue))
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addTocart,removeCart } = counterSlice.actions

export default counterSlice.reducer