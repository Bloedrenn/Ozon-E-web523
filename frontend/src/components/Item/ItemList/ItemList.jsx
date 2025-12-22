import ItemCard from '@components/Item/ItemCard';

const ItemList = ({ items, onDelete }) => {
  return (items.length > 0) ? (
    <div>
      <h1>Список вещей</h1>
      
      {items.map(item => (
        <ItemCard key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  ) : (
    <div className="item">
      <h3>Вещей нет</h3>
    </div>
  )
}

export default ItemList