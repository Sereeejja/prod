import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Render button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Render clear button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
