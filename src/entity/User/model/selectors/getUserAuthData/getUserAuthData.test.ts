import { StateSchema } from "app/providers/StoreProvider"
import { getUserAuthData } from "./getUserAuthData"

describe('getUserAuthData', () => {
    test('State should return authData', () => {
        const state: Partial<StateSchema> = {
            user: {
                authData: {
                    id: 1,
                    username: 'admin'
                }
            }
        }
        expect(getUserAuthData(state as StateSchema)).toEqual({
            id: 1,
            username: 'admin'
        })
    })
})