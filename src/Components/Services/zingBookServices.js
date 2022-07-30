import api from './api'
export const getItems = () => api.get(api.url.reactjs2)
export const getDetailItem = (id) => api.get(`${api.url.reactjs2}/${id}`)
