import { useDispatch, useSelector } from 'react-redux'

import { createAddCustomerAction, createRemoveCustomerAction } from '@store/reducers/customersReducer.js'

const Test = () => {
  const dispatch = useDispatch()
  const balance = useSelector(state => state.bank.balance)
  const customersList = useSelector(state => state.customers.customersList)

  const addMoney = (amount) => {
    dispatch({ type: "ADD_MONEY", payload: Number(amount) })
  }

  const getMoney = (amount) => {
    dispatch({ type: "GET_MONEY", payload: Number(amount) })
  }

  const addCustomer = () => {
    const customer = { id: customersList.length + 1, name: prompt("Введите имя клиента:") } // Пример: { id: 1, name: 'Tom' } // Можно использовать Date.now() в id
    dispatch(createAddCustomerAction(customer)) // Пример: { type: "ADD_CUSTOMER", payload: { id: 1, name: 'Tom' } }

    // Необязательно создавать функции-генераторы для actions
    // dispatch({ type: "ADD_CUSTOMER", payload: { id: 1, name: "Свелана" } })
    // dispatch({ type: "ADD_CUSTOMER", payload: { id: 2, name: "Миша" } })
  }

  const removeCustomer = (id) => {
    dispatch(createRemoveCustomerAction(id))
    
    // Необязательно создавать функции-генераторы для actions
    // dispatch({ type: "REMOVE_CUSTOMER", payload: 2 })
  }

  return (
    <>
      <button onClick={() => addMoney(prompt("Сколько?"))}>Пополнить счёт</button>
      <button onClick={() => getMoney(prompt("Сколько?"))}>Снять со счёта</button>
      <div>{balance}</div>

      <div style={{backgroundColor: '#000', marginTop: '20px'}}>
        <button onClick={() => addCustomer()}>Добавить клиента</button>
        {
          customersList.length > 0 ?
            <div>
              {customersList.map(customer =>
                <div onClick={() => removeCustomer(customer.id)} key={customer.id}>{customer.name}</div>
              )}
            </div>
            :
            <div>Клиенты отсутствуют</div>
        }
      </div>
    </>
  )
}

export default Test
