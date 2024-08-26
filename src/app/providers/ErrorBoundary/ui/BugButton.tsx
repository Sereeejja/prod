import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// TEST COMPONENT
const BugButton:React.FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={throwError}
        >
            {t('text')}
        </Button>
    );
};

export default BugButton;
