import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkExtras, StateSchema } from "app/providers/StoreProvider";
import { getArticlesHasMore, getArticlesIsLoading, getArticlesPage } from "../../selectors/articlesPageSelectors";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { articlesPageActions } from "../../slice/articlesPageSlice";



export const fetchNextArticlesPage = createAsyncThunk<void, void, { rejectValue: string, extra: AsyncThunkExtras, state: StateSchema}>(
    'articles/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const {getState, dispatch} = thunkAPI
        const hasMore = getArticlesHasMore(getState());
        const isLoading = getArticlesIsLoading(getState());
        const page = getArticlesPage(getState());

        if(!isLoading && hasMore) {
            dispatch(fetchArticles(page + 1))
            dispatch(articlesPageActions.setPage(page + 1))
        }
    },
)