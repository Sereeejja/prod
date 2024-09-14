import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
import { Currency } from 'entities/Currency';

describe('getProfileData', () => {
    test('should return data', () => {
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
