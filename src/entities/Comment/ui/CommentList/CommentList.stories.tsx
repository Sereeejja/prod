import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CommentList } from 'entities/Comment';

const meta = {
    title: 'entities/CommentList',
    component: CommentList,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'some text',
                user: { username: 'username', id: '1' },
            },
            {
                id: '2',
                text: 'some text',
                user: { username: 'username', id: '1' },
            },

        ],
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
