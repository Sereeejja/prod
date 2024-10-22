import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Page from 'shared/ui/Page/Page';

const meta = {
    title: 'shared/Page',
    component: Page,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { children: '123' },
};
