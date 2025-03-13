import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkExtras } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export const getProfile = createAsyncThunk<Profile, string, { rejectValue: string, extra: AsyncThunkExtras}>(
    'profile/getProfile',
    async (profileId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error()
            }

            return response.data;

        } catch {
            return thunkAPI.rejectWithValue('error')
        }
        
    },
)