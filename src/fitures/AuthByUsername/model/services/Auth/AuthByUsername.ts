import { createAsyncThunk } from "@reduxjs/toolkit"
import { AsyncThunkExtras } from "app/providers/StoreProvider";
import { User, userActions } from "entity/User";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localstorage";

interface authByUsernameProps {
    loggin: string,
    password: string
}

export const authByUsername = createAsyncThunk<User, authByUsernameProps, { rejectValue: string, extra: AsyncThunkExtras}>(
    'loggin/authByUsername',
    async (requestData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post('/login', requestData)
            console.log(response)
            if (!response.data) {
                throw new Error()
            }
            
            thunkAPI.extra.navigate('/')

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data;

        } catch {
            return thunkAPI.rejectWithValue('error')
        }
        
    },
)