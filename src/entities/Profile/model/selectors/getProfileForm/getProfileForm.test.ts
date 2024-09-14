import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
import { Currency } from 'entities/Currency';

describe('getProfileForm', () => {
    test('should return form', () => {
        const form = {
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
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
