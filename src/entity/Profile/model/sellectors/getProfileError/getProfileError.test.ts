import { StateSchema } from "app/providers/StoreProvider"
import { ValidateProfileErrors } from "../../types/profile"
import { getProfileError } from "./getProfileError"


describe('getProfileError', () => {
    test('State should return Error', () => {
        const state: Partial<StateSchema> = {
            profile: {
                isLoading: false,
                readonly: true,
                error: ValidateProfileErrors.SERVER_ERROR
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual(ValidateProfileErrors.SERVER_ERROR)
    })
})