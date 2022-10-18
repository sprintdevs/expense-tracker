import { FC } from 'react'
import { Routes, Route } from 'react-router'
import Dashboard from '../features/dashboard/Dashboard'
import Income from '../features/income/Income'
import Expense from '../features/expense/Expense'

const RootRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} />
                <Route path='expense' element={<Expense />} />
            </Route>
        </Routes>
    )
}

export default RootRoutes
