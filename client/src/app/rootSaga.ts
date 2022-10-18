import { all } from 'redux-saga/effects'
import dashboardSaga from '../features/dashboard/saga'

export default function* rootSaga() {
    yield all([dashboardSaga()])
}
