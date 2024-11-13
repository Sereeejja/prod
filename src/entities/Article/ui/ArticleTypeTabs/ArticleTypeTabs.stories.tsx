import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

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
    args: {
        onChangeType: action('changeType'),
        value: ArticleType.ALL,
    },

};
