import { createSelector } from 'reselect'
import { INIT_STATE } from './state'

const selectMyItems = (state) => state.itemReducers || INIT_STATE
const selectLoading = createSelector(selectMyItems, (state) => state.isLoading)
const selectItem = createSelector(selectMyItems, (state) => state.listItems.data)
const selectDelItem = createSelector(selectMyItems, (state) => state.infoItemDel)
const selectDetailItem = createSelector(selectMyItems, (state) => state.infoDetailItem)

export { selectItem, selectLoading, selectDetailItem, selectDelItem }