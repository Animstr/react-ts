import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKeys } from "app/providers/StoreProvider/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { AppDispatch } from "shared/config/redux/types/useAsyncThunkTypes";

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer
};

type ReducersListEntry = [StateSchemaKeys, Reducer]

export interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    removeAfterUnmount?: boolean,
    children: ReactNode
};

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        reducers,
        removeAfterUnmount,
        children
    } = props

    const dispatch = useDispatch<AppDispatch>();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({type: `@REMOVE ${name} reducer`})
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    );
};