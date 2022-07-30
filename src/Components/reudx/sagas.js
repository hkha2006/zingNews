import { all } from 'redux-saga/effects'
import * as loginSagas from '../Page/Login/stores/sagas'
import * as itemSagas from '../Page/Home/stores/sagas'
import * as itemBookSagas from '../Page/Books/stores/sagas'

export default function* () {
    yield all([
        loginSagas.requestLogin(),
        itemSagas.listItem(),
        itemBookSagas.listItemBook(),
    ])
}