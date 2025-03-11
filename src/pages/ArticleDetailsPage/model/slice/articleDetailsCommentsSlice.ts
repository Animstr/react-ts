import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entity/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsSchema';
import { getArticleCommentsById } from '../services/getArticleCommentsById';
  
const commentsAdapter = createEntityAdapter<Comment>();

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)
  
const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        ids: [],
        isLoading: true,
        error: undefined,
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticleCommentsById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getArticleCommentsById.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(getArticleCommentsById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const {reducer: articleCommentsReducer} = articleDetailsCommentsSlice;
