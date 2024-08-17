import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import UserIcon from 'shared/assets/icons/user-32-32.png'
import Button, {ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher:React.FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon /> }
        </Button>
    );
};

export default ThemeSwitcher;