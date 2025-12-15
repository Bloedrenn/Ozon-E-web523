const ItemCard = ({ item }) => (
  <div className="item">
    <strong>{item.name}</strong>
    <div>{item.description}</div>
    <div>{item.isAvailable ? 'В наличии :)' : 'Нет в наличии :('}</div>
  </div>
)

export default ItemCard