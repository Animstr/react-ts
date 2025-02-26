import { StateSchema } from "app/providers/StoreProvider"
import { getAuthFormLoading } from "./getAuthFormLoading"


describe('getAuthFormLoading', () => {
    test('State should return isLoading', () => {
        const state: Partial<StateSchema> = {
            authForm: {
                error: 'error',
                password: '123',
                loggin: 'admin',
                isLoading: true
            }
        }
        expect(getAuthFormLoading(state as StateSchema)).toEqual(true)
    })
    /* test('Should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getAuthFormLoading(state as StateSchema)).toEqual(false)
    }) */
})