import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Input from 'shared/ui/Input/Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { },

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        placeholder: 'Type text',
        value: 'some value',
    },
};

export const Secondary: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        placeholder: 'Type text',
        value: 'some value',
        autofocus: true,
    },
};
