import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

import createSagaMiddleware from '@redux-saga/core'
import sagas from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(sagas)

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
