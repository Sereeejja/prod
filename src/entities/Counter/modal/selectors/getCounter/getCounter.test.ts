import { getCounter } from 'entities/Counter/modal/selectors/getCounter/getCounter';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: Partial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
