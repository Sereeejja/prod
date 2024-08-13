import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    setTimeout(() => {
        // @ts-ignore
        res(import('./MainPage'));
    }, 1500)
}));
