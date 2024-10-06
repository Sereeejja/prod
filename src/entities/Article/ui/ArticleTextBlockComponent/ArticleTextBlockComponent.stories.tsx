import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ArticleTextBlockComponent from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

const meta = {
    title: 'shared/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
