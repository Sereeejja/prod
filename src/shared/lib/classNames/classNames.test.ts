import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedResult = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedResult);
    });

    test('with mods false', () => {
        const expectedResult = 'someClass class1 class2 show scrollable';
        expect(classNames('someClass', { show: true, hovered: false, scrollable: true }, ['class1', 'class2'])).toBe(expectedResult);
    });

    test('with mods', () => {
        const expectedResult = 'someClass class1 class2 show scrollable';
        expect(classNames('someClass', { show: true, scrollable: true }, ['class1', 'class2'])).toBe(expectedResult);
    });

    test('with mods undefined', () => {
        const expectedResult = 'someClass class1 class2 show';
        expect(classNames('someClass', { show: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expectedResult);
    });
});
