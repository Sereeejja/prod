import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},

} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        data: {
            username: 'username',
            country: Country.USA,
            city: 'Los Angeles',
            age: 27,
            avatar,
            currency: Currency.EUR,
            first: 'serega',
            lastname: 'seregania',
        },
    },
};

export const WithError: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        error: 'dsads',
    },
};

export const IsLoading: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        isLoading: true,
    },
};
