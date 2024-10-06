import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = (props: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            text
        </div>
    );
};

export default ArticleCodeBlockComponent;
