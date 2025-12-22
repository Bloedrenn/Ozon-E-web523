import { useState } from 'react'

const EditItem = ({ item, onEdit }) => {
  const [name, setName] = useState(item.name)
  const [description, setDescription] = useState(item.description)
  const [isAvailable, setIsAvailable] = useState(item.isAvailable)

  const handleSubmit = () => {
    onEdit({
      id: item.id,
      name,
      description,
      isAvailable
    })
  }

  return (
    <form>
      <input
        type="text"
        value={name}
        placeholder='Название'
        onChange={(e) => setName(e.target.value)}
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

      <button type='button' onClick={handleSubmit}>
        Сохранить
      </button>
    </form>
  )
}

export default EditItem