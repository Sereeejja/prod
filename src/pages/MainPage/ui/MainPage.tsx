import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import Input from 'shared/ui/Input/Input';
import Page from 'shared/ui/Page/Page';

function MainPage() {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <Page>
            {/* <BugButton /> */}
            <h1>{t('Main page')}</h1>
            <Counter />
        </Page>
    );
}

export default MainPage;
