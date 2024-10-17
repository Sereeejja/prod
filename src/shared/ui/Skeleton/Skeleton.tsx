import React, { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

const Skeleton: React.FC<SkeletonProps> = memo((props: SkeletonProps) => {
    const {
        className,
        border,
        height,
        width,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
    );
});

export default Skeleton;