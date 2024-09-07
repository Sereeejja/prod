import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return username', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                error: 'error message', isLoading: false, password: '12345', username: 'admin',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });

    test('work with empty state', () => {
        const state: Partial<StateSchema> = {
            // @ts-ignore
            loginForm: {},
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
