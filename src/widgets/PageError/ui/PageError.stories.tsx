import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import PageError from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { },

} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPageError: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {},
};

export const DarkPageError: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
