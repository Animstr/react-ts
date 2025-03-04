import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "entity/Counter";
import { ProfileSchema } from "entity/Profile";
import { UserSchema } from "entity/User";
import { AuthSchema } from "fitures/AuthByUsername";
import { NavigateOptions, To } from "react-router-dom";

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
    authForm?: AuthSchema,
    profile?: ProfileSchema
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export type StateSchemaKeys = keyof StateSchema;

export interface AsyncThunkExtras {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}