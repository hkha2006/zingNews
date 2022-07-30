import { INIT_STATE_BOOK } from './state'
import produce from 'immer'
import { SAVE_ALL_BOOK, SAVE_DETAIL_BOOK, SET_LOADING } from './contants'

export default function itemBookReducers(state = INIT_STATE_BOOK, action) {
    return produce(state, (draf) => {
        switch (action.type) {
            case SET_LOADING:
                draf.isLoading = action.payload
                break;
            case SAVE_ALL_BOOK:              
                draf.listBooks.data = action.payload
                break;
            case SAVE_DETAIL_BOOK:
                draf.infoDetailItem = action.payload
                break;
            default:
                break;
        }
    })
}