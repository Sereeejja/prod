import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider/config/useAppDispatch';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm:React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const {
        className,
    } = props;

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization')} />
            {error && <Text text={t('Incorrect login or password')} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Username')}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Log In')}
            </Button>
        </div>
    );
});

export default LoginForm;
