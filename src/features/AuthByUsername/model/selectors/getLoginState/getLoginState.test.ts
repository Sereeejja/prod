import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

describe('getLoginState', () => {
    test('should return full state', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                error: 'error message', isLoading: false, password: '12345', username: '123',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            error: 'error message', isLoading: false, password: '12345', username: '123',
        });
    });

    test('work with empty state', () => {
        const state: Partial<StateSchema> = {
            // @ts-ignore
            loginForm: {},
        };
        expect(getLoginState(state as StateSchema)).toEqual({});
    });
});
