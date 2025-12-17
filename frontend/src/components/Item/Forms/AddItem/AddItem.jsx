import { useState, useRef } from 'react'

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isAvailable, setIsAvailable] = useState(false)

  // Создаем ref для формы
  const itemCreateForm = useRef(null)

  return (
    <form ref={itemCreateForm}>
      <input 
        type="text"
        placeholder='Название' 
        onChange={e => setName(e.target.value)} 
      />
      <textarea 
        placeholder='Описание' 
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <div>
        <input 
          type='checkbox' 
          id='isAvailable' 
          onChange={(e) => setIsAvailable(e.target.checked)} 
        />
        <label htmlFor='isAvailable'>В наличии?</label>
      </div>

      <button
        type='button'
        onClick={() => {
          onAdd({ name, description, isAvailable })
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