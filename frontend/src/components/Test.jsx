import { useDispatch, useSelector } from 'react-redux'

import { createAddMoneyAction, createGetMoneyAction } from '@store/slices/bankSlice.js'
import { createAddCustomerAction, createRemoveCustomerAction, getCustomers } from '@store/slices/customersSlice.js'

const Test = () => {
  const dispatch = useDispatch()
  const balance = useSelector(state => state.bank.balance)
  const customersList = useSelector(state => state.customers.customersList)

  const addMoney = (amount) => {
    dispatch(createAddMoneyAction(Number(amount))) // Пример: dispatch({ type: "addMoney", payload: 33 })
  }

  const getMoney = (amount) => {
    dispatch(createGetMoneyAction(Number(amount))) // Пример: dispatch({ type: "getMoney", payload: 25 })
  }

  const addCustomer = () => {
    const customer = { id: customersList.length + 1, name: prompt("Введите имя клиента:") } // Пример: { id: 1, name: 'Tom' } // Можно использовать Date.now() в id
    dispatch(createAddCustomerAction(customer))
  }

  const removeCustomer = (id) => {
    dispatch(createRemoveCustomerAction(id))
  }

  return (
    <>
      <button onClick={() => addMoney(prompt("Сколько?"))}>Пополнить счёт</button>
      <button onClick={() => getMoney(prompt("Сколько?"))}>Снять со счёта</button>
      <div>{balance}</div>

      <div style={{backgroundColor: '#000', marginTop: '20px'}}>
        <button onClick={() => addCustomer()}>Добавить клиента</button>
        <button onClick={() => dispatch(getCustomers())}>Получить клиентов из базы</button>
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
