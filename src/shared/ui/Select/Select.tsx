import React, { memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import * as readline from 'node:readline';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const Select:React.FC<SelectProps> = memo((props: SelectProps) => {
    const {
        className,
        label,
        options = [],
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(
        () => options.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        )),
        [options],
    );

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (<span className={cls.label}>{`${label}>`}</span>)}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionsList}
            </select>
        </div>
    );
});

export default Select;
