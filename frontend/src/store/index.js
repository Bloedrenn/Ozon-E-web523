import { configureStore } from '@reduxjs/toolkit'

import { bankReducer } from './reducers/bankReducer.js'

const store = configureStore({
  reducer: {
    bank: bankReducer
  }
})

export default store
