const bankInitialState = {
  balance: 0
}

// action = {type: "", payload: ... }
export const bankReducer = (state = bankInitialState, action) => {
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
