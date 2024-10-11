import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import CommentCard from 'entities/Comment/ui/CommentCard/CommentCard';
import { Comment } from 'entities/Comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: React.FC<CommentListProps> = memo((props: CommentListProps) => {
    const { t } = useTranslation();

    const {
        className,
        comments,
        isLoading,
    } = props;

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((c) => <CommentCard comment={c} className={cls.comment} key={c.id} isLoading={isLoading} />)
                : <Text text={t('Comments does not exists')} />}
        </div>
    );
});
