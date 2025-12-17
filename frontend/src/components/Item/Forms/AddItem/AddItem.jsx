import { useRef } from 'react'

const AddItem = ({ onAdd }) => {
  // Создаем ref для формы
  const itemCreateForm = useRef(null)

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
        onClick={() => {
          const newItem = Object.fromEntries(new FormData(itemCreateForm.current))
          onAdd(newItem)
          // Сбрасываем поля формы
          itemCreateForm.current.reset()
        }}
      >
        Добавить
      </button>
    </form>
  )
}

export default AddItem