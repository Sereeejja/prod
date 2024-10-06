import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ArticleDetails } from 'entities/Article';

const meta = {
    title: 'shared/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { id: '1' },
};
