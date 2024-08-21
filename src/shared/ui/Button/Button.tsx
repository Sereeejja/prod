import React, {ButtonHTMLAttributes} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton
}

const Button:React.FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...othersProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...othersProps}
        >
            {children}
        </button>
    );
};

export default Button;