import { getArticleById } from "../services/getArticleById"
import { Article, ArticleType } from "../types/article"
import { ArticleDetailsSchema } from "../types/articleDetailsSchema"
import { articleDetailsReducer } from "./articleDetailsSlice"


describe('ArticleDetailsSlice',() => {
    const state: ArticleDetailsSchema = {
        isLoading: false,
        data: {
            "id": "1",
            "title": "Javascript news",
            "subtitle": "Что нового в JS за 2022 год?",
            "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
            "views": 1022,
            "createdAt": "26.02.2022",
            "type": [ArticleType.IT],
            "blocks": [],
        }
    }
    test('getArticleById fullfiled', () => {
        const pending: ArticleDetailsSchema = {
            isLoading: true,
            error: undefined
        }
        const action = getArticleById.fulfilled(state.data as Article, '', '1');

        expect(articleDetailsReducer(pending, action)).toEqual({
            ...state,
            error: undefined
        }) 
    })
})