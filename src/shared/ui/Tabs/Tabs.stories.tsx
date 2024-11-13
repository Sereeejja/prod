import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Tabs from 'shared/ui/Tabs/Tabs';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        tabs: [
            {
                value: 'tab1',
                content: 'tab1',
            },
            {
                value: 'tab2',
                content: 'tab2',
            },
            {
                value: 'tab3',
                content: 'tab3',
            },
        ],
        value: 'tab2',
        onTabClick: action('onTabClick'),
    },
};
