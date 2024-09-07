import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',

}
interface AppLinkProps extends LinkProps{
    className?: string;
    children: React.ReactNode;
    theme?: AppLinkTheme
}

const AppLink:React.FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
