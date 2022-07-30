import { takeLatest, put, call, all } from 'redux-saga/effects'
import { CREATE_ITEM, DELETE_ITEM, GET_ALL_ITEMS, UPDATE_ITEM, GET_DETAIL_ITEM } from './contants'
import { getItems, deleteItem, createItem, updateItem, getDetailItem } from '../../../Services/zingNewsServices'
import { setLoading, saveAllItems, saveDeleteItem, saveDetailItem } from './actions'

function* getListItems() {
    try {
        yield put(setLoading(true))
        const response = yield call(getItems)
        yield all([put(setLoading(false)), (put(saveAllItems(response.data)))])
    } catch (error) {
        console.log(error)
        yield put(setLoading(false))
    }
}

function* getDetailItemSaga({ payload, resolve }) {
    try {
        yield put(setLoading(true))
        const respone = yield call(getDetailItem, payload)
        resolve(respone.data)
        yield put(saveDetailItem(respone.data))
        yield put(setLoading(false));
    } catch (error) {
        console.log(error)
        yield put(setLoading(false))
    }
}

function* deleteItemSaga({ payload, resolve }) {
    try {
        yield put(setLoading(true));
        const respone = yield call(deleteItem, payload);
        resolve(respone.status)
        yield put(saveDeleteItem(respone.data))
        yield put(setLoading(false));
    } catch (error) {
        resolve(false);
        yield put(setLoading(false));
    }
}

function* createItemSaga({ payload, resolve }) {
    try {
        yield put(setLoading(true));
        const respone = yield call(createItem, payload);
        resolve(respone)
        yield put(setLoading(false));
    } catch (error) {
        resolve(false);
        yield put(setLoading(false));
    }
}

function* updateItemSaga({ payload, resolve }) {
    try {
        yield put(setLoading(true));
        const response = yield call(updateItem, payload)
        resolve(response)
        yield put(setLoading(false))
    } catch (error) {
        resolve(false)
        yield put(setLoading(false))
    }
}

export function* listItem() {
    yield takeLatest(GET_ALL_ITEMS, getListItems)
    yield takeLatest(CREATE_ITEM, createItemSaga)
    yield takeLatest(UPDATE_ITEM, updateItemSaga)
    yield takeLatest(GET_DETAIL_ITEM, getDetailItemSaga)
    yield takeLatest(DELETE_ITEM, deleteItemSaga);
}
