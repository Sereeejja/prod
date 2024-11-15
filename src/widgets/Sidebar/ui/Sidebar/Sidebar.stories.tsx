import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Sidebar from './Sidebar';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { },

} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSidebar: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
    args: {},
};

export const DarkSidebar: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
    args: {},
};
