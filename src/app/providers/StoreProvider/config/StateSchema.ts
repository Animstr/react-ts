import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entity/Article";
import { CounterSchema } from "entity/Counter";
import { ProfileSchema } from "entity/Profile";
import { UserSchema } from "entity/User";
import { AddCommentFormSchema } from "fitures/AddCommentForm";
import { AuthSchema } from "fitures/AuthByUsername";
import { SaveScrollPosition } from "fitures/SaveScrollPosition";
import { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import { ArticlesPageSchema } from "pages/ArticlesPage";

export type MountedReducers = OptionRecord<StateSchemaKeys, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: Action) => StateSchema,
    add: (key: StateSchemaKeys, reducer: Reducer) => void,
    remove: (key: StateSchemaKeys) => void,
    getMountedReducers: () => MountedReducers
}

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scroll: SaveScrollPosition

    //async
    authForm?: AuthSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsComments?: ArticleDetailsCommentsSchema,
    addCommentsForm?: AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export type StateSchemaKeys = keyof StateSchema;

export interface AsyncThunkExtras {
    api: AxiosInstance
}