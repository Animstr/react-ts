import { configureStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import { AsyncThunkExtras, StateSchema } from './StateSchema'
import { counterReducer } from 'entity/Counter'
import { userReducer } from 'entity/User'
import { createReducerManager } from './ReducerManager'
import { $api } from 'shared/api/api'
import { scrollPositionReducer } from 'fitures/SaveScrollPosition'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scroll: scrollPositionReducer
    }
    const reducerManager = createReducerManager(rootReducers)
    
    const extraArg: AsyncThunkExtras = {
        api: $api,
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

