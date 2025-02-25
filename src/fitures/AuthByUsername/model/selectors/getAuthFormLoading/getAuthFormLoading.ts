import { StateSchema } from "app/providers/StoreProvider";

export const getAuthFormLoading = (state: StateSchema) => state?.authForm?.isLoading