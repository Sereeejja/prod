import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = (props: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};

export default ArticleImageBlockComponent;
