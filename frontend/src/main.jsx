import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

const bankInitialState = {
  balance: 0
}

// action = {type: "", payload: ... }
const bankReducer = (state = bankInitialState, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return { ...state, balance: state.balance + action.payload }
      // return { balance: state.balance + action.payload }

    case "GET_MONEY":
      return { ...state, balance: state.balance - action.payload }
      // return { balance: state.balance - action.payload }

    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    bank: bankReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
