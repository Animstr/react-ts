import { createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunkExtras, StateSchema } from "app/providers/StoreProvider";
import { getArticlesInited } from "../../selectors/articlesPageSelectors";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { ArticleSortField, ArticleType } from "entity/Article";
import { SortOrder } from "shared/types";


export const initArticlesPage = createAsyncThunk<void, URLSearchParams, { rejectValue: string, extra: AsyncThunkExtras, state: StateSchema}>(
    'articles/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {getState, dispatch} = thunkAPI
        const _inited = getArticlesInited(getState());

        if (!_inited) {
            const order = searchParams.get('order') as SortOrder;
            const sort = searchParams.get('sort') as ArticleSortField;
            const search = searchParams.get('search');
            const type = searchParams.get('type') as ArticleType;

            if (order) {
                dispatch(articlesPageActions.setOrder(order))
            }
            if (sort) {
                dispatch(articlesPageActions.setSort(sort))
            }
            if (search) {
                dispatch(articlesPageActions.setSearch(search))
            }

            if (type && type !== ArticleType.ALL) {
                dispatch(articlesPageActions.setType(type))
            }

            dispatch(articlesPageActions.initState())
            dispatch(fetchArticles({}))
        }
    },
)