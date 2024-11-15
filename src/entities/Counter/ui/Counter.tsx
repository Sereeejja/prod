import React from 'react';
import Button from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

const Counter:React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div data-testid="counter">
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>{t('Increment')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('Decrement')}</Button>
        </div>
    );
};

export default Counter;
