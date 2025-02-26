import { AuthSchema } from "../types/AuthSchema"
import { authActions, authReducer } from "./AuthSlice"


describe('getCounter',() => {
    test('Set login', () => {
        const state: AuthSchema = {
            loggin: '',
            password: '',
            isLoading: false
        }
        expect(authReducer(state, authActions.setLoggin('admin'))).toEqual({
            loggin: 'admin',
            password: '',
            isLoading: false
        }) 
    })
    test('Set password', () => {
        const state: AuthSchema = {
            loggin: '',
            password: '',
            isLoading: false
        }
        expect(authReducer(state, authActions.setPassword('123'))).toEqual({
            loggin: '',
            password: '123',
            isLoading: false
        })
    })
})