import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { counterReducer, counterActions } from './CounterSlice';

describe('CounterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
