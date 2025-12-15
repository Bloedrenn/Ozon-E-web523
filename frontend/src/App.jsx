import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '@components/UI/Header'

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/items`)
      .then(response => setItems(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <Header text="Шапка сайта" title="ХЕЛЛО" />
      <h1>Список вещей</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App