import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginisLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return isLoading', () => {
        const state: Partial<StateSchema> = {
            loginForm: {
                error: 'error message', isLoading: false, password: '123', username: '123',
            },
        };
        expect(getLoginisLoading(state as StateSchema)).toEqual(false);
    });

    test('work with empty state', () => {
        const state: Partial<StateSchema> = {
            // @ts-ignore
            loginForm: {},
        };
        expect(getLoginisLoading(state as StateSchema)).toEqual(false);
    });
});
