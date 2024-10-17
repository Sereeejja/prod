import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CommentCard from 'entities/Comment/ui/CommentCard/CommentCard';

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {},

} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '2',
            text: 'some text',
            user: { username: 'username', id: '1' },
        },
    },
};

export const Loading: Story = {
    args: {
        comment: {
            id: '2',
            text: 'some text',
            user: { username: 'username', id: '1' },
        },
        isLoading: true,
    },
};
