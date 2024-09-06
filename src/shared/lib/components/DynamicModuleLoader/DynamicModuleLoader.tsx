import React, { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'app/providers/StoreProvider/config/useAppDispatch';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: ReactNode;
    removeAfterUnmount?: boolean;
}

const DynamicModuleLoader:React.FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
    const { t } = useTranslation();
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;
