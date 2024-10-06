import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { width: '100%', height: 200 },
};

export const CircleDark: Story = {
    args: { border: '50%', width: 100, height: 100 },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Circle: Story = {
    args: { border: '50%', width: 100, height: 100 },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const CircleOrange: Story = {
    args: { border: '50%', width: 100, height: 100 },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};

export const CircleBlack: Story = {
    args: { border: '50%', width: 100, height: 100 },
    decorators: [ThemeDecorator(Theme.BLACK)],
};
