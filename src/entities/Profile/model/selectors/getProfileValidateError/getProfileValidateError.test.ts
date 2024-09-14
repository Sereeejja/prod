import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateError } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

describe('getProfileValidateError', () => {
    test('should return validateErrorList', () => {
        const errorList: ValidateProfileError[] = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: errorList,
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual(errorList);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
    });
});
