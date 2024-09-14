import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
import { Currency } from 'entities/Currency';
import { validateProfileData } from 'entities/Profile/model/services/validateProfile/validateProfileData';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const data = {
    username: 'username',
    country: Country.USA,
    city: 'Los Angeles',
    age: 27,
    avatar,
    currency: Currency.EUR,
    first: 'serega',
    lastname: 'seregania',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('user data error', async () => {
        const result = validateProfileData({ ...data, first: '', username: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect profile', async () => {
        const result = validateProfileData({ });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,

        ]);
    });
});
