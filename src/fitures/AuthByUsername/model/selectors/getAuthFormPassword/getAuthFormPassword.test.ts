import { StateSchema } from "app/providers/StoreProvider"
import { getAuthFormPassword } from "./getAuthFormPassword"



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
        expect(getAuthFormPassword(state as StateSchema)).toEqual('123')
    })
    /* test('Should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getAuthFormPassword(state as StateSchema)).toEqual('')
    }) */
})