import { StateSchema } from "app/providers/StoreProvider";

export const getAuthFormError = (state: StateSchema) => state?.authForm?.error