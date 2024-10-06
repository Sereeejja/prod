import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ArticleImageBlockComponent from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';

const meta = {
    title: 'shared/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
