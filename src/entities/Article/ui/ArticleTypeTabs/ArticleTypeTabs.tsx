import React, { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import { Article, ArticleType } from 'entities/Article/model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs: React.FC<ArticleTypeTabsProps> = memo((props: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const {
        className,
        value,
        onChangeType,
    } = props;

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All Articles'),
        },
        {
            value: ArticleType.IT,
            content: t('It'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Economics'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Science'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});
