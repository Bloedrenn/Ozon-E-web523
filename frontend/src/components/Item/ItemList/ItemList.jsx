import ItemCard from '@components/Item/ItemCard';

const ItemList = ({ items, onEdit, onDelete }) => {
  return (items.length > 0) ? (
    <div>
      <h1>Список вещей</h1>
      
      {items.map(item => (
        <ItemCard key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  ) : (
    <div className="item">
      <h3>Вещей нет</h3>
    </div>
  )
}

export default ItemList