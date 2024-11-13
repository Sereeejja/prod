import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
