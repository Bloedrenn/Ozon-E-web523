import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCustomers = createAsyncThunk(
  'customers/getCustomers',
  async () => {
    const response = await axios.get('http://localhost:3000/clients')
    return response.data
  }
)

const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    customersList: [],
  },
  reducers: {
    addCustomer: (state, action) => {
      const newCustomer = action.payload
      state.customersList.push(newCustomer)
    },
    removeCustomer: (state, action) => {
      const idCustomerToDelete = action.payload
      state.customersList = state.customersList.filter(customer => customer.id !== idCustomerToDelete)
    }
  },
  extraReducers: (builder) => {
    builder
      // Когда запрос getCustomers успешно завершен
      .addCase(getCustomers.fulfilled, (state, action) => {
        const newCustomers = action.payload
        state.customersList.push(...newCustomers)
      })
  }
})

export const { addCustomer: createAddCustomerAction, removeCustomer: createRemoveCustomerAction } = customersSlice.actions
export default customersSlice.reducer
