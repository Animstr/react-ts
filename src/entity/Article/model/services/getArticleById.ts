import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkExtras } from "app/providers/StoreProvider";
import { Article } from "../types/article";

export const getArticleById = createAsyncThunk<Article, string,  { rejectValue: string, extra: AsyncThunkExtras}>(
    'articles/getArticleById',
    async (articleId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get(`/articles/${articleId}`);

            if (!response.data) {
                throw new Error()
            }

            return response.data;

        } catch {
            return thunkAPI.rejectWithValue('error')
        }
        
    },
)