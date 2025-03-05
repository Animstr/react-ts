import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkExtras, StateSchema } from "app/providers/StoreProvider";
import { Profile, ValidateProfileErrors } from "../../types/profile";
import { getProfileForm } from "../../sellectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const saveData = createAsyncThunk<Profile, void, { rejectValue: ValidateProfileErrors[], extra: AsyncThunkExtras, state: StateSchema}>(
    'profile/saveData',
    async (_, thunkAPI) => {

        const formData = getProfileForm(thunkAPI.getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return thunkAPI.rejectWithValue(errors)
        }

        try {
            const response = await thunkAPI.extra.api.put('/profile', formData);

            if (!response.data) {
                throw new Error()
            }

            return response.data;

        } catch {
            return thunkAPI.rejectWithValue([ValidateProfileErrors.SERVER_ERROR])
        }
        
    },
)
