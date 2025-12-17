import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '@components/UI/Header'
import ItemList from '@components/Item/ItemList'
import AddItem from '@components/Item/Forms/AddItem'

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/items`)
      .then(response => setItems(response.data))
      .catch(error => console.error(error))
  }, [])

  const addItem = (newItem) => {
    newItem.id = String(items.length + 1)
    setItems([...items, newItem])
    axios.post(`${API_URL}/items`, newItem)
  }

  return (
    <>
      <Header text="Шапка сайта" title="ХЕЛЛО" />
      
      <main>
        <ItemList items={items} />
      </main>
      <aside>
        <AddItem onAdd={addItem} />
      </aside>
    </>
  )
}

export default App