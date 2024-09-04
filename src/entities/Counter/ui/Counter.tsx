import React from 'react';
import Button from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../modal/slice/CounterSlice';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';

const Counter:React.FC = () => {
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
            <Button data-testid="increment-btn" onClick={increment}>Increment</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>Decrement</Button>
        </div>
    );
};

export default Counter;
