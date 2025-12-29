import { useState } from 'react'
import { Link } from 'react-router-dom'

import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";

import EditItem from '@components/Item/Forms/EditItem'

import styles from './ItemCard.module.css'

const ItemCard = ({ item, onEdit, onDelete }) => {
  const [editForm, setEditForm] = useState(false)

  return (
    <div className={styles.item}>
      <IoCloseCircleSharp onClick={() => onDelete(item.id)} className={styles.deleteIcon} size={15} />
      <FaEdit onClick={() => setEditForm(!editForm)} className={styles.editIcon} size={15} />
      <Link to={`/items/${item.id}`}>
        <strong>{item.name}</strong>
      </Link>
      <div>{item.description}</div>
      <div>{item.isAvailable ? 'В наличии :)' : 'Нет в наличии :('}</div>

      {editForm && <EditItem item={item} onEdit={onEdit} />}
    </div>
  )
}

export default ItemCard