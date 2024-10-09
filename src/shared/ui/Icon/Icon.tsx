import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const Icon: React.FC<IconProps> = memo((props: IconProps) => {
    const {
        className,
        Svg,
    } = props;

    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
});

export default Icon;
