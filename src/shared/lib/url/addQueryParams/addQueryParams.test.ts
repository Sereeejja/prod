import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            q: 'searchq',
        });
        expect(params).toBe('?test=value&q=searchq');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            q: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
