import axios from "axios";
import { authByUsername } from "./AuthByUsername";
import { userActions } from "entity/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('authByUsername', () => {

    /* test('sucess login', async () => {
        const userValue = {username: 'admin', id: 1};
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}));
        const thunk = new TestAsyncThunk(authByUsername);
        const result = await thunk.callThunk({loggin: 'admin', password: '123'})

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(userValue)

    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
        const thunk = new TestAsyncThunk(authByUsername);
        const result = await thunk.callThunk({loggin: 'admin', password: '123'})

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    }) */
})