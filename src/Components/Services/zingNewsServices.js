import api from './api'
export const getItems = () => api.get(api.url.reactjs)
export const getDetailItem = (id) => api.get(`${api.url.reactjs}/${id}`)
export const createItem = (payload) => api.post (api.url.reactjs, payload)
export const updateItem = (payload) => api.put(`${api.url.reactjs}/${payload.id}`, payload)
export const deleteItem = (id) => api.delete(`${api.url.reactjs}/${id}`)