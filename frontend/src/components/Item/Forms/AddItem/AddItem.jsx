import { useRef } from 'react'

const AddItem = ({ onAdd }) => {
  // Создаем ref для формы
  const itemCreateForm = useRef(null)

  const handleSubmit = () => {
    const newItem = Object.fromEntries(new FormData(itemCreateForm.current))
    // Преобразуем isAvailable из строки в boolean
    newItem.isAvailable = newItem.isAvailable === "on"
    onAdd(newItem)
    // Сбрасываем поля формы
    itemCreateForm.current.reset()
  }

  return (
    <form ref={itemCreateForm}>
      <input 
        type="text"
        name="name"
        placeholder='Название' 
      />
      <textarea 
        name="description"
        placeholder='Описание' 
      ></textarea>

      <div>
        <input 
          type='checkbox' 
          name="isAvailable"
          id='isAvailable' 
        />
        <label htmlFor='isAvailable'>В наличии?</label>
      </div>

      <button
        type='button'
        onClick={handleSubmit}
      >
        Добавить
      </button>
    </form>
  )
}

export default AddItem