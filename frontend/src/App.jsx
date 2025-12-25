import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '@components/UI/Header'
import ItemList from '@components/Item/ItemList'
import AddItem from '@components/Item/Forms/AddItem'

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  // показать пример массив
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

  const editItem = (editedItem) => {
    setItems(items.map(item => item.id === editedItem.id ? editedItem : item))
    axios.put(`${API_URL}/items/${editedItem.id}`, editedItem)
  }

  const deleteItem = (id) => {
    if (confirm('Вы уверены, что хотите удалить эту вещь?')) {
      setItems(items.filter(item => item.id !== id))
      axios.delete(`${API_URL}/items/${id}`)
    }
  }

  return (
    <>
      <Header text="Шапка сайта" title="ХЕЛЛО" />
      
      <main>
        <ItemList items={items} onEdit={editItem} onDelete={deleteItem} />
      </main>
      <aside>
        <AddItem onAdd={addItem} />
      </aside>
    </>
  )
}

export default App