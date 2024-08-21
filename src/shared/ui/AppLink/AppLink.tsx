import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',

}
interface AppLinkProps extends LinkProps{
    className?: string;
    children: React.ReactNode;
    theme?: AppLinkTheme
}

const AppLink:React.FC<AppLinkProps> = (props) => {
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
};

export default AppLink;