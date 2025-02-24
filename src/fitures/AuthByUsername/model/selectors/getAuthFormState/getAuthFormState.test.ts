import { StateSchema } from "app/providers/StoreProvider"
import { getAuthForm } from "./getAuthFormState"

describe('getUserAuthData', () => {
    test('State should return authForm', () => {
        const state: Partial<StateSchema> = {
            authForm: {
                loggin: 'admin',
                password: '123',
                isLoading: false
            }
        }
        expect(getAuthForm(state as StateSchema)).toEqual({
            loggin: 'admin',
            password: '123',
            isLoading: false
        })
    })
})