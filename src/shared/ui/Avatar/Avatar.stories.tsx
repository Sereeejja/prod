import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Avatar from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },

} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: { src: 'https://i.pinimg.com/564x/d5/0f/b8/d50fb8aec1b8bd04c89ec63167537882.jpg' },
};

export const SmallAvatar: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: { src: 'https://i.pinimg.com/564x/d5/0f/b8/d50fb8aec1b8bd04c89ec63167537882.jpg', size: 50 },
};
