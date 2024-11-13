import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ArticleTypeTabs from './ArticleTypeTabs';

const meta = {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
