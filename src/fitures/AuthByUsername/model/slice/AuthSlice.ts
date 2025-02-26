import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import { authByUsername } from '../services/Auth/AuthByUsername';

const initialState: AuthSchema = {
    loggin: '',
    password: '',
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setLoggin: (state, action: PayloadAction<string>) => {
            state.loggin = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(authByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

// Action creators are generated for each case reducer function
export const { actions: authActions } = authSlice;

export const { reducer: authReducer } = authSlice;