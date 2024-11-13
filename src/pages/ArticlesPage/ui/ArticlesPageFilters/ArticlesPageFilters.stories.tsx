import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ArticlesPageFilters from './ArticlesPageFilters';

const meta = {
    title: 'pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
