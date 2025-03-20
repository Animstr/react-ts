import { Action, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { MountedReducers, ReducerManager, StateSchema, StateSchemaKeys } from "./StateSchema"

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {

    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKeys[] = []
    
    const mountedReducers: MountedReducers = {}; 

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (state: StateSchema, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach((key) => {
                    delete state[key]
                })
                keysToRemove = []
            }
            return combinedReducer(state as unknown as undefined, action)
        },
        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
            mountedReducers[key] = true
        },
        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return
            }
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
            mountedReducers[key] = false
        }
    }
}