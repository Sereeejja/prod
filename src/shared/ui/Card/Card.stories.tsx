import type { Meta, StoryObj } from '@storybook/react';
import Card from 'shared/ui/Card/Card';
import Text from 'shared/ui/Text/Text';
import React from 'react';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {},

} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <Text title="some title" text="text" />,
    },
};
