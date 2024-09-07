import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                error: 'error message', isLoading: false, password: '123', username: '123',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error message');
    });

    test('work with empty state', () => {
        const state: Partial<StateSchema> = {
            // @ts-ignore
            loginForm: {},
        };
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
