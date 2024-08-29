import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
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
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {},
};

export const DarkNavbar: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {},
};
