import { StateSchema } from "app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"


describe('getProfileData', () => {
    test('State should return Data', () => {
        const state: Partial<StateSchema> = {
            profile: {
                isLoading: false,
                readonly: true,
                data: {
                    first: "Daniil",
                    second: "Shuliyatev",
                    age: 21,
                }
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual({
            first: "Daniil",
            second: "Shuliyatev",
            age: 21,
        })
    })
})