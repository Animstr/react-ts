import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { authReducer } from 'fitures/AuthByUsername/model/slice/AuthSlice';
import { ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    authForm: authReducer
} 

export const StoreDecorator = (state: Partial<StateSchema>, asyncReducers?: Partial<ReducersMapObject<StateSchema>>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
);