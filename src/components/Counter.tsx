import React from 'react';
import * as classes from './Counter.module.scss'

const Counter:React.FC = () => {
    const [value, setValue] = React.useState(0);

    const increment = (some: number) => {
        setValue(value + some);
    }

    return (
        <div>
            <div>My Counter = {value}</div>
            <button className={classes.btn} onClick={() => increment(10)}>Increment</button>
        </div>
    );
};

export default Counter;