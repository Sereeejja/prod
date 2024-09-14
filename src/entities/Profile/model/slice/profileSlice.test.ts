import { ProfileSchema, updateProfileData } from 'entities/Profile';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { profileActions, profileReducer } from './profileSlice';

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

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: Partial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test('test cancel edit', () => {
        const state: Partial<ProfileSchema> = {
            form: {},
            data,
            readonly: false,
            validateError: undefined,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            form: data,
            data,
            readonly: true,
            validateError: undefined,
        });
    });

    test('test update profile', () => {
        const state: Partial<ProfileSchema> = {
            form: { username: '123123123' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '123123123' }))).toEqual({
            form: { username: '123123123' },
        });
    });

    test('test update profile service pending', () => {
        const state: Partial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        // @ts-ignore
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: Partial<ProfileSchema> = {
            isLoading: true,
        };
        // @ts-ignore
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data))).toEqual({
            isLoading: false,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
