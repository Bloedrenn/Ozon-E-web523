import { configureStore } from '@reduxjs/toolkit'

import { bankReducer } from './reducers/bankReducer.js'
import { customersReducer } from './reducers/customersReducer.js'

const store = configureStore({
  reducer: {
    bank: bankReducer,
    customers: customersReducer
  }
})

export default store
