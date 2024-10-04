import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = memo((props: ArticlesPageProps) => {
    const { t } = useTranslation('articles');
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ARTICLES PAGE
        </div>
    );
});

export default ArticlesPage;
