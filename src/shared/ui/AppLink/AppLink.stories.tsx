import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AppLink, { AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { to: '/' },

} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryAppLink: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: { theme: AppLinkTheme.PRIMARY, children: 'Link' },
};
export const PrimaryAppLinkDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { theme: AppLinkTheme.PRIMARY, children: 'Link' },
};

export const SecondaryAppLink: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: { theme: AppLinkTheme.SECONDARY, children: 'Link' },
};

export const SecondaryAppLinkDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { theme: AppLinkTheme.SECONDARY, children: 'Link' },
};

export const RedAppLink: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: { theme: AppLinkTheme.RED, children: 'Link' },
};

export const RedAppLinkDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { theme: AppLinkTheme.RED, children: 'Link' },
};
