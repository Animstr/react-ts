import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile';
import { getProfile } from '../services/getProfile/getProfile';
import { saveData } from '../services/saveData/saveData';


const initialState: ProfileSchema = {
    data: undefined,
    isLoading: true,
    readonly: true,
    error: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        discardChanges: (state) => {
            state.form = state.data;
            state.readonly = true;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,    
                ...action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(saveData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(saveData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.readonly = true;
            })
            .addCase(saveData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;