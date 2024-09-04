import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StoreProvider';
import { userEvent } from '@storybook/test';
import Counter from './Counter';

describe('Counter', () => {
    test('Render counter', () => {
        const state: StateSchema = {
            counter: {
                value: 10,
            },
        };
        componentRender(<Counter />, { initialState: state });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        screen.debug();
    });

    test('Increment', () => {
        const state: StateSchema = {
            counter: {
                value: 10,
            },
        };
        componentRender(<Counter />, { initialState: state });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        // expect(screen.getByTestId('increment-btn'));
    });

    test('Increment', () => {
        const state: StateSchema = {
            counter: {
                value: 10,
            },
        };
        componentRender(<Counter />, { initialState: state });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
