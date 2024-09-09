import React from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import Select from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstname?: (val: string) => void;
    onChangeLastname?: (val: string) => void;
    onChangeCity?: (val: string) => void;
    onChangeAge?: (val: string) => void;
    onChangeUsername?: (val: string) => void;
    onChangeAvatar?: (val: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readonly?: boolean;
}

export const ProfileCard:React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error loading')}
                    text={t('Try to reload the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="" />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your second name')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Your city')}
                    onChange={onChangeCity}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Your username')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Your avatar url')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    className={cls.input}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>

    );
};
