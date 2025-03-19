import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { ArticleView } from "entity/Article";
import { fetchArticles } from "../fetchArticles/fetchArticles";

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage', () => {

    test('success', async () => {

        const thunk = new TestAsyncThunk<void, void, string>(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                view: ArticleView.BIG,
                ids: [],
                entities: {},
                page: 1,
                limit: 4,
                hasMore: true
            }
        });
        
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledWith(2)
    });
    test ('hasMore false', async () => {
        const thunk = new TestAsyncThunk<void, void, string>(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                view: ArticleView.BIG,
                ids: [],
                entities: {},
                page: 1,
                limit: 4,
                hasMore: false
            }
        });
        
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled()
    })
    test ('isLoading', async () => {
        const thunk = new TestAsyncThunk<void, void, string>(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: true,
                error: undefined,
                view: ArticleView.BIG,
                ids: [],
                entities: {},
                page: 1,
                limit: 4,
                hasMore: true
            }
        });
        
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled()
    })
})