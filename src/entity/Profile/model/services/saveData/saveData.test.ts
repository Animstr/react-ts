import { Country } from "entity/Country"
import { Currency } from "entity/Currency"
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk"
import { Profile, ValidateProfileErrors } from "../../types/profile"
import { saveData } from "./saveData"

describe('saveData', () => {
    const data = {
        first: "Daniil",
        second: "Shuliyatev",
        age: 21,
        currency: Currency.EUR,
        country: Country.RUSSIA,
        username: "admin",
        avatar: "https://avatars.mds.yandex.net/i?id=2effa651d6f0f9180845c1e22184e0c1_l-5558644-images-thumbs&n=13",
        city: "Владимир"
    }
    test('sucsess', async () => {
        const thunk = new TestAsyncThunk<Profile, void, ValidateProfileErrors[]>(saveData, { profile: { form: data, isLoading: false, readonly: true}});
        thunk.api.put.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.payload).toEqual(data);
        expect(thunk.dispatch).toHaveBeenCalled();
    })
    test('server error', async () => {
        const thunk = new TestAsyncThunk<Profile, void, ValidateProfileErrors[]>(saveData, { profile: { form: data, isLoading: false, readonly: true}});
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR])
    })

    test('validation error', async () => {
        const thunk = new TestAsyncThunk<Profile, void, ValidateProfileErrors[]>(saveData, { profile: { form: {...data, first: ''}, isLoading: false, readonly: true}});
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.INCORECT_USER_DATA])
    })
})