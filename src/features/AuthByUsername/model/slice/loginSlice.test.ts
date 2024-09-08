import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: Partial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('444'))).toEqual({ username: '444' });
    });
    test('test set password', () => {
        const state: Partial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('444'))).toEqual({ password: '444' });
    });
    test('test set isLoading', () => {
        const state: Partial<LoginSchema> = { isLoading: true };
        expect(loginReducer(
            state as LoginSchema,
            loginByUsername.fulfilled({ username: 'some', id: '1' }, '', { password: '123', username: '123' }),
        )).toEqual({ isLoading: false });
    });
});
