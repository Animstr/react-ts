import { StateSchema } from "app/providers/StoreProvider"
import { ValidateProfileErrors } from "../../types/profile"
import { getProfileValidateErrors } from "./getProfileValidateErrors"



describe('getProfileValidateError', () => {
    test('State should return validateErrors', () => {
        const state: Partial<StateSchema> = {
            profile: {
                isLoading: false,
                readonly: true,
                validateErrors: [ValidateProfileErrors.INCORECT_USER_DATA]
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.INCORECT_USER_DATA])
    })
})