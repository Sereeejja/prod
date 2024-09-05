import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm:React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Username')}
                autofocus
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Password')}
            />
            <Button className={cls.loginBtn}>
                {t('Log In')}
            </Button>
        </div>
    );
};

export default LoginForm;
