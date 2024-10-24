import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema, ScrollSchema } from 'features/ScrollSave';

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSaveSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            const { position, path } = action.payload;
            state.scroll[path] = position;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
