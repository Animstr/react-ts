import { StateSchema } from "app/providers/StoreProvider"
import { getProfileIsLoading } from "./getProfileIsLoading"


describe('getProfileIsLoading', () => {
    test('State should return isLoading', () => {
        const state: Partial<StateSchema> = {
            profile: {
                isLoading: false,
                readonly: true,
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false)
    })
})