import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from 'entities/Profile';

describe('getProfileReadonly', () => {
    test('should return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
