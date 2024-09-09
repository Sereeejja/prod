import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Belgium, content: Country.Belgium },
    { value: Country.USA, content: Country.USA },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Czechia, content: Country.Czechia },
];

export const CountrySelect:React.FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Specify country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
