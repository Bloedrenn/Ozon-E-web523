import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ItemDetailPage from '@pages/ItemDetailPage'
import HomePage from '@pages/HomePage'

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
    <Router>
      <Routes>
        <Route path="/" element={
          <HomePage 
            items={items} 
            onAdd={addItem}
            onEdit={editItem}
            onDelete={deleteItem}
          />
        } />
        <Route path="/items/:id" element={<ItemDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App