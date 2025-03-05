import { Country } from "entity/Country";
import { Currency } from "entity/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileErrors } from "../../types/profile";


describe('validateProfileData', () => {
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

    test(' sucsess validation', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    });

    test('error on incorrect first- or second- name', async () => {
        const result = validateProfileData({...data, first: '', second: ''})

        expect(result).toEqual([ValidateProfileErrors.INCORECT_USER_DATA])
    });

    test('error on incorrect age', async () => {
        const result = validateProfileData({...data, age: NaN})

        expect(result).toEqual([ValidateProfileErrors.INCORECT_USER_AGE])
    });

    test('error on incorrect city', async () => {
        const result = validateProfileData({...data, city: ''})

        expect(result).toEqual([ValidateProfileErrors.INCORECT_USER_CITY])
    });
    test('error on incorrect all', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileErrors.INCORECT_USER_DATA,
            ValidateProfileErrors.INCORECT_USER_AGE,
            ValidateProfileErrors.INCORECT_USER_CITY
        ])
    });
})