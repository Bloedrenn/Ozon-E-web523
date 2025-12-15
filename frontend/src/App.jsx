import Header from '@components/UI/Header'
import ItemList from '@components/Item/ItemList'
import AddItem from '@components/Item/Forms/AddItem'

function App() {
  return (
    <>
      <Header text="Шапка сайта" title="ХЕЛЛО" />
      
      <main>
        <ItemList />
      </main>
      <aside>
        <AddItem />
      </aside>
    </>
  )
}

export default App