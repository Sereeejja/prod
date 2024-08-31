import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
export const Clear: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};
export const ClearInverted: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const OutlineSizeM: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};
export const OutlineSizeL: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
}; export const OutlineSizeXL: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineLight: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const InvertedBackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
