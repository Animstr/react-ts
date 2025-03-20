import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { ArticleView } from "entity/Article";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { initArticlesPage } from "./initArticlesPage";

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage', () => {

    test('no inited', async () => {

        const thunk = new TestAsyncThunk<void, void, string>(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                view: ArticleView.BIG,
                ids: [],
                entities: {},
                page: 1,
                limit: 4,
                hasMore: true,
                _inited: false
            }
        });
        
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalled()
    });
    test ('already inited', async () => {
        const thunk = new TestAsyncThunk<void, void, string>(initArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                view: ArticleView.BIG,
                ids: [],
                entities: {},
                page: 1,
                limit: 4,
                hasMore: false,
                _inited: true
            }
        });
        
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled()
    })
})