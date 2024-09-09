import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Select from 'shared/ui/Select/Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },

} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        label: 'smth idk',
        options: [{
            value: 'czk',
            content: 'MDA',
        }, {
            value: 'rub',
            content: 'RUB',
        }, {
            value: 'eur',
            content: 'EUR',
        },
        ],
    },
};
