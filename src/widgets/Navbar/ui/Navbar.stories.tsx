import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Navbar from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { },

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNavbar: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {},
};

export const DarkNavbar: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {},
};

export const AuthUser: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: { id: 'dasda', username: 'dasdasd' } } })],
    args: {},
};
