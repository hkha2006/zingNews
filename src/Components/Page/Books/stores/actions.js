import { SET_LOADING, GET_ALL_BOOK, SAVE_ALL_BOOK, GET_DETAIL_BOOK, SAVE_DETAIL_BOOK } from "./contants"

export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    }
}

export const getAllItemsBook = (payload) => {
    return {
        type: GET_ALL_BOOK,
        payload
    }
}

export const getDetailItemBook = (payload, resolve) => {
    return {
        type: GET_DETAIL_BOOK,
        payload,
        resolve
    }
}

export function asyncDetailBook(dispatch) {
    console.log("alo")
    return function returnAsync(payload) {
        return new Promise((resolve) => dispatch(getDetailItemBook(payload, resolve)));
    };
}

export const saveDetailItemBook = (payload) => {
    return {
        type: SAVE_DETAIL_BOOK,
        payload,
    }
}

export const saveAllItemsBook = (payload) => {
    return {
        type: SAVE_ALL_BOOK,
        payload
    }
}