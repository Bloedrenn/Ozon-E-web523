const AddItem = () => (
  <form>
    <input type="text" placeholder='Название' />
    <textarea placeholder='Описание'></textarea>
    {/* <input type="number" placeholder='Цена' /> */}

    <div>
      <input type='checkbox' id='isAvailable' />
      <label htmlFor='isAvailable'>В наличии?</label>
    </div>

    <button type='button'>Добавить</button>
  </form>
)

export default AddItem