import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { User, userActions } from "entity/User";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localstorage";

interface authByUsernameProps {
    loggin: string,
    password: string
}

export const authByUsername = createAsyncThunk<User, authByUsernameProps, { rejectValue: string }>(
    'loggin/authByUsername',
    async (requestData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', requestData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data;

        } catch {
            return thunkAPI.rejectWithValue('error')
        }
        
    },
)