import ItemsList from '@components/Item/ItemList'
import AddItem from '@components/Item/Forms/AddItem'


const HomePage = ({ items, onAdd, onEdit, onDelete }) => (
  <>
    <main>
      <ItemsList items={items} onEdit={onEdit} onDelete={onDelete} />
    </main>
    <aside>
      <AddItem onAdd={onAdd} />
    </aside>
  </>
)

export default HomePage