import { Country } from "entity/Country"
import { Currency } from "entity/Currency"

export enum ValidateProfileErrors {
    INCORECT_USER_DATA = "INCORECT_USER_DATA",
    INCORECT_USER_AGE = "INCORECT_USER_AGE",
    INCORECT_USER_CITY = "INCORECT_USER_CITY",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}

export interface Profile {
    id?: string,
    first?: string,
    second?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateErrors?: ValidateProfileErrors[],
}