import { StateSchema } from "app/providers/StoreProvider"
import { getAuthFormError } from "./getAuthFormError"

describe('getAuthFormError', () => {
    test('State should return error', () => {
        const state: Partial<StateSchema> = {
            authForm: {
                error: 'error',
                password: '123',
                loggin: 'admin',
                isLoading: false
            }
        }
        expect(getAuthFormError(state as StateSchema)).toEqual('error')
    })
    test('Should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getAuthFormError(state as StateSchema)).toEqual(undefined)
    })
})