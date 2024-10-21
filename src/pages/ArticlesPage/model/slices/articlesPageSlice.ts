import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

// SELECTOR
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        ids: [],
        error: undefined,
        view: ArticleView.SMALL,
        entities: {},
    }),
    reducers: {
        setView: (state, action:PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                articlesAdapter.setAll(state, action.payload);
                state.error = undefined;
                state.isLoading = false;
            })
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },

});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSlice;
