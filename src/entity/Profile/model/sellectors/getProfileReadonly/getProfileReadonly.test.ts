import { StateSchema } from "app/providers/StoreProvider"
import { getProfileReadonly } from "./getProfileReadonly"


describe('getProfileIsLoading', () => {
    test('State should return isLoading', () => {
        const state: Partial<StateSchema> = {
            profile: {
                isLoading: false,
                readonly: true,
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })
})