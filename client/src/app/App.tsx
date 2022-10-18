import { FC } from 'react'

import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes'

const App: FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}

export default App
