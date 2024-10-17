import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Comment } from 'entities/Comment';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import AppLink from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard: React.FC<CommentCardProps> = memo((props: CommentCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
                {comment.user.avatar && <Avatar size={30} src={comment.user?.avatar} />}
                <Text title={comment.user.username} className={cls.username} />
            </AppLink>
            <Text text={comment.text} className={cls.text} />
        </div>
    );
});

export default CommentCard;