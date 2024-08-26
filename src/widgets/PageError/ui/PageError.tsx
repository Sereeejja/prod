import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import * as cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError:React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Some error')}</p>
            <Button onClick={reloadPage}>
                {t('Refresh page')}
            </Button>
        </div>
    );
};

export default PageError;
