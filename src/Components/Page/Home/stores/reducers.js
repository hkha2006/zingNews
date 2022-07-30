import { INIT_STATE } from './state'
import produce from 'immer'
import { SAVE_ALL_ITEMS, SAVE_DELETE_ITEM, SET_LOADING, SAVE_DETAIL_ITEM } from './contants'

export default function itemReducers(state = INIT_STATE, action) {
    return produce(state, (draf) => {
        switch (action.type) {
            case SET_LOADING:
                draf.isLoading = action.payload
                break;
            case SAVE_ALL_ITEMS:
                draf.listItems.data = action.payload
                console.log(action.payload)
                break;
            case SAVE_DETAIL_ITEM:
                draf.infoDetailItem = action.payload
            case SAVE_DELETE_ITEM:
                draf.infoItemDel = action.payload
                break;
            default:
                break;
        }
    })
}