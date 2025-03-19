import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkExtras, StateSchema } from "app/providers/StoreProvider";
import { Article } from "entity/Article";
import { getArticlesLimit } from "../../selectors/articlesPageSelectors";



export const fetchArticles = createAsyncThunk<Article[], number, { rejectValue: string, extra: AsyncThunkExtras, state: StateSchema}>(
    'articles/fetchArticles',
    async (page, thunkAPI) => {
        
        const limit = getArticlesLimit(thunkAPI.getState());

        try {
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit
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