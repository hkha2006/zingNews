import { takeLatest, put, call, all } from 'redux-saga/effects'
import {  GET_ALL_BOOK, GET_DETAIL_BOOK } from './contants'
import { getItems,getDetailItem} from '../../../Services/zingBookServices'
import { setLoading, saveAllItemsBook, saveDetailItemBook } from './actions'

function* getListItemBookSaga() {
    try {
        yield put(setLoading(true))
        const response = yield call(getItems)
        console.log(response.data)
        yield all([put(setLoading(false)), (put(saveAllItemsBook(response.data)))])
    } catch (error) {
        console.log(error)
        yield put(setLoading(false))
    }
}

function* getDetailItemBookSaga({ payload, resolve }) {
    try {
        yield put(setLoading(true))
        const respone = yield call(getDetailItem, payload)
        console.log(respone)
        resolve(respone.data)
        yield put(saveDetailItemBook(respone.data))
        yield put(setLoading(false));
    } catch (error) {
        console.log(error)
        yield put(setLoading(false))
    }
}


export function* listItemBook() {
    yield takeLatest(GET_ALL_BOOK, getListItemBookSaga)
    yield takeLatest(GET_DETAIL_BOOK, getDetailItemBookSaga)
}
