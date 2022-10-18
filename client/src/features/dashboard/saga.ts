import { all, fork, put, takeLatest } from 'redux-saga/effects'
import axios from '../../app/api'
import { getSomething } from './slice'

function* watchGetSomething() {
    yield takeLatest(getSomething, fetchSomething)
}

function* fetchSomething() {}

export default function* dashboardSaga() {
    yield all([fork(watchGetSomething)])
}
