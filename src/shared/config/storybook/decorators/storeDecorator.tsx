import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entity/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entity/Profile';
import { addCommentFormReducer } from 'fitures/AddCommentForm/model/slice/addCommentsFormSlice';
import { authReducer } from 'fitures/AuthByUsername/model/slice/AuthSlice';
import { articleCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    authForm: authReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentsForm: addCommentFormReducer,
    articleDetailsComments: articleCommentsReducer
} 

export const StoreDecorator = (state: Partial<StateSchema>, asyncReducers?: Partial<ReducersMapObject<StateSchema>>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
);