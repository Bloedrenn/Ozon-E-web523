import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getAllItemsApi = () => axios.get(`${API_URL}/items/`)
export const getItemApi = (id) => axios.get(`${API_URL}/items/${id}/`)
export const createItemApi = (newItem) => axios.post(`${API_URL}/items/`, newItem)
export const updateItemApi = (id, editedItem) => axios.put(`${API_URL}/items/${id}/`, editedItem)
export const deleteItemApi = (id) => axios.delete(`${API_URL}/items/${id}/`)
