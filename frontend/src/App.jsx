import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ItemDetailPage from '@pages/ItemDetailPage'
import HomePage from '@pages/HomePage'
import Test from '@components/Test.jsx'

import { getAllItemsApi, createItemApi, updateItemApi, deleteItemApi } from '@api/itemsApi.js'

function App() {
  // показать пример массив
  const [items, setItems] = useState([])

  useEffect(() => {
    getAllItemsApi()
      .then(response => setItems(response.data))
      .catch(error => console.error(error))
  }, [])

  const addItem = (newItem) => {
    newItem.id = String(items.length + 1)
    setItems([...items, newItem])
    createItemApi(newItem)
  }

  const editItem = (editedItem) => {
    setItems(items.map(item => item.id === editedItem.id ? editedItem : item))
    updateItemApi(editedItem.id, editedItem)
  }

  const deleteItem = (id) => {
    if (confirm('Вы уверены, что хотите удалить эту вещь?')) {
      setItems(items.filter(item => item.id !== id))
      deleteItemApi(id)
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
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App