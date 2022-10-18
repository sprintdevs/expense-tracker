import { combineReducers } from '@reduxjs/toolkit'

import dashboardReducer from '../features/dashboard/slice'

const rootReducer = combineReducers({
    dashboard: dashboardReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
