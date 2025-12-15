import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaEdit } from "react-icons/fa";

const ItemCard = ({ item }) => (
  <div className="item">
    <IoCloseCircleSharp className='delete-icon' size={15} />
    <FaEdit className='edit-icon' size={15} />
    <strong>{item.name}</strong>
    <div>{item.description}</div>
    <div>{item.isAvailable ? 'В наличии :)' : 'Нет в наличии :('}</div>
  </div>
)

export default ItemCard