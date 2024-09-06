import React from 'react';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initialState: Partial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={initialState}>
        <Story />
    </StoreProvider>
);
