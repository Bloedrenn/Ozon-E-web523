import { useState } from 'react'

const AddItem = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isAvailable, setIsAvailable] = useState(false)

  return (
    <form>
      <input 
        type="text"
        placeholder='Название' 
        value={name}
        onChange={e => setName(e.target.value)} 
      />
      <textarea 
        placeholder='Описание' 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <div>
        <input 
          type='checkbox' 
          id='isAvailable' 
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)} 
        />
        <label htmlFor='isAvailable'>В наличии?</label>
      </div>

      <button type='button'>Добавить</button>
    </form>
  )
}

export default AddItem