import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkExtras } from "app/providers/StoreProvider";
import { Article } from "entity/Article";



export const fetchArticles = createAsyncThunk<Article[], void, { rejectValue: string, extra: AsyncThunkExtras}>(
    'comment/getArticleCommentsById',
    async (_, thunkAPI) => {

        try {
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error()
            }

            return response.data;

        } catch {
            return thunkAPI.rejectWithValue('error')
        }
        
    },
)