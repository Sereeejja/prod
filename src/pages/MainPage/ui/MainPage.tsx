import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

function MainPage() {
    const { t } = useTranslation();

    return (
        <div>
            {/* <BugButton /> */}
            <h1>{t('Main page')}</h1>
            <Counter />
        </div>
    );
}

export default MainPage;
