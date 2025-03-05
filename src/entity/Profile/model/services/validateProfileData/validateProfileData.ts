import { Profile, ValidateProfileErrors } from "../../types/profile";


export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA]
    }

    const {first, second, age, city} = profile;

    const errors: ValidateProfileErrors[] = []

    if (!first || !second) {
        errors.push(ValidateProfileErrors.INCORECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORECT_USER_AGE)
    }

    if (!city) {
        errors.push(ValidateProfileErrors.INCORECT_USER_CITY)
    }

    return errors
}