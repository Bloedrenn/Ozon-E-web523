import { useState, useEffect } from 'react'
import axios from 'axios'

import ItemCard from '@components/Item/ItemCard';

const API_URL = import.meta.env.VITE_API_URL;

const ItemList = () => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    axios.get(`${API_URL}/items`)
      .then(response => setItems(response.data))
      .catch(error => console.error(error))
  }, [])

  return (items.length > 0) ? (
    <div>
      <h1>Список вещей</h1>
      
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  ) : (
    <div className="item">
      <h3>Вещей нет</h3>
    </div>
  )
}

export default ItemList