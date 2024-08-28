import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar:React.FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
                Main Page
            </AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                About
            </AppLink>
        </div>
    </div>
);

export default Navbar;
