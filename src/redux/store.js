import { createStore, applyMiddleware,compose } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const logger = createLogger({})

export default () => {
    const store = createStore(
        persistedReducer, compose(applyMiddleware(
            logger,
            promiseMiddleware,
            thunk
        )))
    const persistor = persistStore(store)
    return {
        store,
        persistor
    }
}
