import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import Icon from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import Card from 'shared/ui/Card/Card';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import ArticleTextBlockComponent from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

const ArticleListItemSkeleton: React.FC<ArticleListItemSkeletonProps> = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton className={cls.username} width={150} height={16} />
                        <Skeleton className={cls.date} width={150} height={16} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.img} width={200} height={200} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton className={cls.title} width={150} height={16} />
            </Card>
        </div>
    );
});

export default ArticleListItemSkeleton;
