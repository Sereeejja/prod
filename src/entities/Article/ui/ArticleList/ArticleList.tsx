import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import ArticleListItem from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList: React.FC<ArticleListProps> = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
    } = props;

    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
        ));

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Articles do not found')} size={TextSize.L} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map((article) => (renderArticle(article)))
                : null}
            {isLoading && getSkeletons(view)}

        </div>
    );
});
