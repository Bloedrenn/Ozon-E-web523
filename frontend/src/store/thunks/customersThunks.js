import axios from 'axios'

import { createAddManyCustomersAction } from "@store/reducers/customersReducer.js"

export const getCustomers = () => {
  return dispatch => {
    axios.get('http://localhost:3000/clients')
      .then(response => dispatch(createAddManyCustomersAction(response.data))) // Пример: { type: "ADD_MANY_CUSTOMERS", payload: response.data }
      /*
      response.data = [
        {
          id: "1",
          name: "Иван"
        },
        {
          id: "2",
          name: "Анна"
        },
        {
          id: "3",
          name: "Сергей"
        },
        {
          id: "4",
          name: "Елена"
        },
        {
          id: "5",
          name: "Дмитрий"
        }
      ]
      */
  }
}