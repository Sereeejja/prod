import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = (props: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            text
        </div>
    );
};

export default ArticleTextBlockComponent;
