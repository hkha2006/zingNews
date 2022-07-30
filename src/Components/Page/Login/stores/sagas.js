import { takeLatest, put, call, all } from 'redux-saga/effects'
import { LOGIN_REQUEST } from './contants'
import { loginRequestService } from '../../../Services/loginService'
import { saveInfoLoginAction, setLoading } from './actions'
function* loginRequestSaga({ payload }) {
    try {
        yield put(setLoading(true));
        console.log(payload.params)
        const respone = yield call(loginRequestService, payload.params);
        yield all([put(setLoading(false)), put(saveInfoLoginAction(respone.data.result))]);
        console.log(respone)
        if (respone.data.result) {
            payload.navigate("/");
        }
    } catch (error) {
        yield put(setLoading(false));
    }
}

export function* requestLogin() {
    yield takeLatest(LOGIN_REQUEST, loginRequestSaga);
}