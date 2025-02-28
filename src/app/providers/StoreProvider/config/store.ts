import { configureStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import { AsyncThunkExtras, StateSchema } from './StateSchema'
import { counterReducer } from 'entity/Counter'
import { userReducer } from 'entity/User'
import { createReducerManager } from './ReducerManager'
import { $api } from 'shared/api/api'
import { NavigateOptions, To } from 'react-router-dom'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducers)
    
    const extraArg: AsyncThunkExtras = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema, UnknownAction, StateSchema> ,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleWare => getDefaultMiddleWare({
            thunk: {
                extraArgument: extraArg
            }
        })
    })
    //@ts-expect-error I'l fix this type soon
    store.reducerManager = reducerManager;

    return store;
}

