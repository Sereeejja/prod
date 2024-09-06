import type { Meta, StoryObj } from '@storybook/react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { },

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'title lorem',
        text: 'text lorem',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'title lorem',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'text lorem',
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'title lorem',
        text: 'text lorem',
    },
};

export const OnlyTitleDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'title lorem',
    },
};

export const OnlyTextDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        text: 'text lorem',
    },
};

export const Error: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'Error',
        text: 'text lorem',
        theme: TextTheme.ERROR,
    },
};
