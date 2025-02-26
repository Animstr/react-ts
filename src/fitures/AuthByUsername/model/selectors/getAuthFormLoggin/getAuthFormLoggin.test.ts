import { StateSchema } from "app/providers/StoreProvider"
import { getAuthFormLoggin } from "./getAuthFormLoggin"


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
        expect(getAuthFormLoggin(state as StateSchema)).toEqual('admin')
    })
    /* test('Should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getAuthFormLoggin(state as StateSchema)).toEqual('')
    }) */
})