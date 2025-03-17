import { StateSchema } from "app/providers/StoreProvider";
import { ArticleType } from "../types/article";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails";


describe('getArticleDetails',() => {
    const data = {
        "id": "1",
        "title": "Javascript news",
        "subtitle": "Что нового в JS за 2022 год?",
        "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        "views": 1022,
        "user" : {
            'id': 1,
            'username': 'admin'
        },
        "createdAt": "26.02.2022",
        "type": [ArticleType.IT],
        "blocks": [],
    }
    test('State should return data', () => {
        const state: Partial<StateSchema> = {
            articleDetails : {
                isLoading: false,
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })
    test('State should return isLoading', () => {
        const state: Partial<StateSchema> = {
            articleDetails : {
                isLoading: false,
                data
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
    })
    test('State should return error', () => {
        const state: Partial<StateSchema> = {
            articleDetails : {
                isLoading: false,
                error: 'error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    })
})