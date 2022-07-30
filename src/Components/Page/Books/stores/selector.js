import { createSelector } from 'reselect'
import { INIT_STATE_BOOK } from './state'

const selectMyBooks = (state) => state.itemBookReducers || INIT_STATE_BOOK
const selectLoading = createSelector(selectMyBooks, (state) => state.isLoading)
const selectBooks = createSelector(selectMyBooks, (state) => state.listBooks.data)
const selectDetailBook = createSelector(selectMyBooks, (state) => state.infoDetailItem)

export { selectBooks, selectLoading, selectDetailBook}