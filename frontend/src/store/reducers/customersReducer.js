const initialState = {
  customersList: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      const newCustomer = action.payload
      return { ...state, customersList: [...state.customersList, newCustomer] }

    case REMOVE_CUSTOMER:
      const idCustomerToDelete = action.payload
      return { ...state, customersList: state.customersList.filter(customer => customer.id != idCustomerToDelete) }

    default:
      return state
  }
}

export const createAddCustomerAction = payload => ({ type: ADD_CUSTOMER, payload })
export const createRemoveCustomerAction = payload => ({ type: REMOVE_CUSTOMER, payload })
