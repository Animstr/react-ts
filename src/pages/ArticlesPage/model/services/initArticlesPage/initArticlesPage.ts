import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkExtras, StateSchema } from "app/providers/StoreProvider";
import { getArticlesInited } from "../../selectors/articlesPageSelectors";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { articlesPageActions } from "../../slice/articlesPageSlice";


export const initArticlesPage = createAsyncThunk<void, void, { rejectValue: string, extra: AsyncThunkExtras, state: StateSchema}>(
    'articles/initArticlesPage',
    async (_, thunkAPI) => {
        const {getState, dispatch} = thunkAPI
        const _inited = getArticlesInited(getState());

        if (!_inited) {
            dispatch(articlesPageActions.initState())
            dispatch(fetchArticles(1))
        }
    },
)