import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from 'entities/Profile';

describe('getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'some error',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('some error');
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
