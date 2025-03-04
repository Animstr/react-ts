import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkExtras, StateSchema } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";
import { getProfileForm } from "../../sellectors/getProfileForm/getProfileForm";

export const saveData = createAsyncThunk<Profile, void, { rejectValue: string, extra: AsyncThunkExtras, state: StateSchema}>(
    'profile/saveData',
    async (_, thunkAPI) => {

        const formData = getProfileForm(thunkAPI.getState());

        try {
            const response = await thunkAPI.extra.api.put('/profile', formData);

            return response.data;

        } catch {
            return thunkAPI.rejectWithValue('error')
        }
        
    },
)