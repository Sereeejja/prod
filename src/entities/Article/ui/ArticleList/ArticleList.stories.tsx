import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArticleView } from 'entities/Article';
import { ArticleList } from './ArticleList';

const meta = {
    title: 'shared/ArticleList',
    component: ArticleList,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const isLoadingBig: Story = {
    args: { articles: [], isLoading: true, view: ArticleView.BIG },
};

export const isLoadingSmall: Story = {
    args: { articles: [], isLoading: true, view: ArticleView.SMALL },
};
