import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return password', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                error: 'error message', isLoading: false, password: '12345', username: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('12345');
    });

    test('work with empty state', () => {
        const state: Partial<StateSchema> = {
            // @ts-ignore
            loginForm: {},
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
