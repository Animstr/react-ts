import { StateSchema } from "app/providers/StoreProvider"
import { getProfileForm } from "./getProfileForm"


describe('getProfileForm', () => {
    test('State should return Form', () => {
        const state: Partial<StateSchema> = {
            profile: {
                isLoading: false,
                readonly: true,
                form: {
                    first: "Daniil",
                    second: "Shuliyatev",
                    age: 21,
                }
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual({
            first: "Daniil",
            second: "Shuliyatev",
            age: 21,
        })
    })
})