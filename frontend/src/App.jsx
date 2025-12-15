import Header from '@components/UI/Header'
import ItemList from '@components/Item/ItemList'

function App() {
  return (
    <>
      <Header text="Шапка сайта" title="ХЕЛЛО" />
      
      <main>
        <ItemList />
      </main>
      <aside></aside>
    </>
  )
}

export default App