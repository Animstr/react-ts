import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkExtras } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export const getProfile = createAsyncThunk<Profile, void, { rejectValue: string, extra: AsyncThunkExtras}>(
    'profile/getProfile',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get('/profile')
            return response.data;

        } catch {
            return thunkAPI.rejectWithValue('error')
        }
        
    },
)