import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entity/Counter'
import { userReducer } from 'entity/User'
import { createReducerManager } from './ReducerManager'
import { $api } from 'shared/api/api'
import { NavigateFunction } from 'react-router-dom'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducers)
    
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleWare => getDefaultMiddleWare({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }
        })
    })
    //@ts-expect-error I'l fix this type soon
    store.reducerManager = reducerManager;

    return store;
}

