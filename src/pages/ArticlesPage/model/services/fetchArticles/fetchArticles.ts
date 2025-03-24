import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkExtras, StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleType } from "entity/Article";
import { getArticlesLimit, getArticlesOrder, getArticlesPage, getArticlesSearch, getArticlesSort, getArticlesType } from "../../selectors/articlesPageSelectors";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";

interface FetchArticlesProps {
    replace?: boolean
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, { rejectValue: string, extra: AsyncThunkExtras, state: StateSchema}>(
    'articles/fetchArticles',
    async (_, thunkAPI) => {
        
        const limit = getArticlesLimit(thunkAPI.getState());
        const order = getArticlesOrder(thunkAPI.getState());
        const sort = getArticlesSort(thunkAPI.getState());
        const search = getArticlesSearch(thunkAPI.getState());
        const page = getArticlesPage(thunkAPI.getState());
        const type = getArticlesType(thunkAPI.getState());

        try {
            addQueryParams({order, sort, search, type})
            const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type
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