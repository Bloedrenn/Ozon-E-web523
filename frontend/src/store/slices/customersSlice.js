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
    customersStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    customersError: null
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
      // Когда отправили запрос getCustomers
      .addCase(getCustomers.pending, (state) => {
        state.customersStatus = 'loading'
      })
      // Когда запрос getCustomers успешно завершен
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.customersError = null
        state.customersStatus = 'succeeded'

        const newCustomers = action.payload
        state.customersList.push(...newCustomers)
      })
      // Когда запрос getCustomers завершился с ошибкой
      .addCase(getCustomers.rejected, (state, action) => {
        state.customersStatus = 'failed'
        state.customersError = action.error.message
      })
  }
})

export const { addCustomer: createAddCustomerAction, removeCustomer: createRemoveCustomerAction } = customersSlice.actions
export default customersSlice.reducer
