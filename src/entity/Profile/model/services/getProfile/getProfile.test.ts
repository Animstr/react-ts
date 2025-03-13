import { Country } from "entity/Country";
import { Currency } from "entity/Currency";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { Profile } from "../../types/profile";
import { getProfile } from "./getProfile";

describe('getProfile', () => {
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

    test('success getProfile', async () => {

        const thunk = new TestAsyncThunk<Profile, string, string>(getProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk<Profile, string, string>(getProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
})