import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { ArticleView } from "entity/Article";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { initArticlesPage } from "./initArticlesPage";
import { ArticleSortField, ArticleType } from "entity/Article/model/types/article";

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage', () => {

    test('no inited', async () => {

        const thunk = new TestAsyncThunk<void, URLSearchParams, string>(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                view: ArticleView.BIG,
                ids: [],
                entities: {},
                page: 1,
                limit: 4,
                hasMore: true,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
                _inited: false,
                type: ArticleType.ALL
            }
        });
        
        await thunk.callThunk(new URLSearchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalled()
    });
    test ('already inited', async () => {
        const thunk = new TestAsyncThunk<void, URLSearchParams, string>(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                view: ArticleView.BIG,
                ids: [],
                entities: {},
                page: 1,
                limit: 4,
                hasMore: false,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
                _inited: true,
                type: ArticleType.ALL
            }
        });
        
        await thunk.callThunk(new URLSearchParams);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled()
    })
})