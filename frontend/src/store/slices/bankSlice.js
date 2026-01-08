import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  balance: 0
}

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    addMoney: (state, action) => {
      state.balance += action.payload
    },
    getMoney: (state, action) => {
      state.balance -= action.payload
    }
  }
})

export const { addMoney: createAddMoneyAction, getMoney: createGetMoneyAction } = bankSlice.actions
export default bankSlice.reducer
