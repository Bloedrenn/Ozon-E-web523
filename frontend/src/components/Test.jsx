import { useDispatch, useSelector } from 'react-redux'

const Test = () => {
  const dispatch = useDispatch()
  const balance = useSelector(state => state.bank.balance)

  const addMoney = (amount) => {
    dispatch({ type: "ADD_MONEY", payload: Number(amount) })
  }

  const getMoney = (amount) => {
    dispatch({ type: "GET_MONEY", payload: Number(amount) })
  }

  return (
    <>
      <button onClick={() => addMoney(prompt("Сколько?"))}>Пополнить счёт</button>
      <button onClick={() => getMoney(prompt("Сколько?"))}>Снять со счёта</button>
      <div>{balance}</div>
    </>
  )
}

export default Test
