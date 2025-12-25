import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const ItemDetailPage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [itemLoading, setItemLoading] = useState(true)
  const [itemError, setItemError] = useState(null)

  useEffect(() => {
    axios.get(`${API_URL}/items/${id}/`)
      .then(response => {
        setItem(response.data)
        setItemLoading(false)
      })
      .catch(e => {
        console.error('Ошибка загрузки товара:', e)
        setItemError('Ошибка! Не удалось загрузить товар')
        setItemLoading(false)
      })
  }, [id])

  if (itemLoading) return <div>Загрузка...</div>
  if (itemError) return <div>{itemError}</div> 

  return (
    <div className="item-detail">
      <Link to="/">← На главную</Link>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <div className="availability">
        {item.isAvailable ? 'Есть в наличии' : 'Нет в наличии'}
      </div>
    </div>
  )
}

export default ItemDetailPage