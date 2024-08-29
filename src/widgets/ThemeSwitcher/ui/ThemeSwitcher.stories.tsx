import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

const meta = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { },

} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSwitcherLight: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {},
};

export const ThemeSwitcherDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
