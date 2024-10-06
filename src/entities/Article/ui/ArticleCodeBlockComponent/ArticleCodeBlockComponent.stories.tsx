import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ArticleCodeBlockComponent from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';

const meta = {
    title: 'shared/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
