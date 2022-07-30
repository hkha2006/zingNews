import { SET_LOADING, GET_ALL_ITEMS, SAVE_ALL_ITEMS, DELETE_ITEM, SAVE_DELETE_ITEM, CREATE_ITEM, UPDATE_ITEM, GET_DETAIL_ITEM, SAVE_DETAIL_ITEM } from "./contants"

export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    }
}

export const getAllItems = (payload) => {
    return {
        type: GET_ALL_ITEMS,
        payload
    }
}

export const getDetailItem = (payload, resolve) => {
    return {
        type: GET_DETAIL_ITEM,
        payload,
        resolve
    }
}

export function asyncDetailItem(dispatch) {
    return function returnAsync(payload) {
        return new Promise((resolve) => dispatch(getDetailItem(payload, resolve)));
    };
}

export const saveDetailItem = (payload) => {
    return {
        type: SAVE_DETAIL_ITEM,
        payload
    }
}

export const saveAllItems = (payload) => {
    return {
        type: SAVE_ALL_ITEMS,
        payload
    }
}

export const deleteItem = (payload, resolve) => {
    return {
        type: DELETE_ITEM,
        payload,
        resolve
    }
}

export function asyncDeleteItem(dispatch) {
    return function returnAsync(payload) {
        return new Promise((resolve) => dispatch(deleteItem(payload, resolve)));
    };
}

export const saveDeleteItem = (payload) => {
    return {
        type: SAVE_DELETE_ITEM,
        payload
    }
}

export const createItem = (payload, resolve) => {
    return {
        type: CREATE_ITEM,
        payload,
        resolve
    }
}

export function asyncCreateItem(dispatch) {
    return function returnAsync(payload) {
        return new Promise((resolve) => dispatch(createItem(payload, resolve)));
    };
}

export const updateItem = (payload, resolve) => {
    return {
        type: UPDATE_ITEM,
        payload,
        resolve
    }
}

export function asyncUpdateItem(dispatch) {
    return function returnAsync(payload) {
        return new Promise((resolve) => dispatch(updateItem(payload, resolve)));
    };
}