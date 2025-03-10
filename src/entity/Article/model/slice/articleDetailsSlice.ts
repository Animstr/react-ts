import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { getArticleById } from '../services/getArticleById'
import { Article } from '../types/article'


const initialState: ArticleDetailsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined
}

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const {reducer: articleDetailsReducer} = articleDetailsSlice;
export const {actions: articleDetailsActions} = articleDetailsSlice;