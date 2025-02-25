import { Action, EnhancedStore, Reducer, ReducersMapObject, StateFromReducersMapObject } from "@reduxjs/toolkit";
import { CounterSchema } from "entity/Counter";
import { UserSchema } from "entity/User";
import { AuthSchema } from "fitures/AuthByUsername";

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: Action) => StateSchema,
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void,
}

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    //async
    authForm?: AuthSchema
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export type StateSchemaKeys = keyof StateSchema;
